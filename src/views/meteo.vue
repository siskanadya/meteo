<script setup>
import { ref, onMounted } from "vue";
import { fetchMeteo } from "@/services/meteo.js";

const villes = [
  { code: "bordeaux", nom: "Bordeaux" },
  { code: "arcachon", nom: "Arcachon" },
  { code: "libourne", nom: "Libourne" },
  { code: "blaye", nom: "Blaye" },
  { code: "langon", nom: "Langon" },
];

const ville = ref("bordeaux");
const meteo = ref(null);
const loading = ref(false);
const error = ref("");

async function chargerMeteo() {
  error.value = "";
  loading.value = true;
  meteo.value = null;
  try {
    const data = await fetchMeteo(ville.value);
    meteo.value = data;
    // quick sanity check in console
    console.log("meteo loaded:", data);
  } catch (e) {
    error.value = e?.message ?? "Erreur inconnue";
  } finally {
    loading.value = false;
  }
}

onMounted(chargerMeteo);
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">🌦️ Météo — Gironde</h1>

    <form class="d-flex flex-column align-items-center gap-2" @submit.prevent>
      <label for="ville" class="form-label">Choisir une ville :</label>
      <div class="d-flex gap-2">
        <select id="ville" v-model="ville" class="form-select w-auto">
          <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="loading"
          @click="chargerMeteo"
        >
          {{ loading ? "Chargement..." : "Charger" }}
        </button>
      </div>
    </form>

    <div class="mt-4">
      <div v-if="loading" class="alert alert-secondary">Chargement...</div>
      <div v-else-if="error" class="alert alert-danger">Erreur : {{ error }}</div>

      <div v-else-if="meteo && Array.isArray(meteo.days) && meteo.days.length">
        <div class="text-center mb-3">
          <h2>{{ meteo.city }}</h2>
          <p>{{ meteo.current.condition }} — {{ meteo.current.tmp }}°C</p>
          <img :src="meteo.current.icon" alt="Météo actuelle" width="64" height="64" />
        </div>

        <section class="row g-3">
          <div v-for="j in meteo.days" :key="j.day_long" class="col-12 col-md-4">
            <div class="card p-3 text-center">
              <h5 class="mb-2">{{ j.day_long }}</h5>
              <img :src="j.icon" :alt="j.condition" width="64" height="64" />
              <p class="mb-1">{{ j.tmin }}°C / {{ j.tmax }}°C</p>
              <p class="text-muted mb-0">{{ j.condition }}</p>
            </div>
          </div>
        </section>
      </div>

      <div v-else-if="meteo" class="alert alert-warning">
        Aucune prévision trouvée pour {{ ville }}.
      </div>
    </div>
  </div>
</template>
