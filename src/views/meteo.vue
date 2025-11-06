<script setup>
import { ref, onMounted, watch } from "vue";
import { fetchMeteo } from "@/services/meteo.js";
import Card from "@/components/card.vue";

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

/* Charge automatiquement Bordeaux au montage */
onMounted(chargerMeteo);

/* Recharge dès que la ville change */
watch(ville, () => {
  chargerMeteo();
});


</script>
<template>
  <div class="container">
     <div class="title-container">
     <img src="/carte.svg" alt="Icône météo" class="title-icon" />
     <h1>Météo Gironde</h1>
  </div>

    <form @submit.prevent>
      <label>Choisissez votre ville</label>
      <div class="select-container">
        <select id="ville" v-model="ville">
          <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
      </div>
    </form>

    <div class="mt-4">
      <div v-if="loading" class="alert alert-secondary">Chargement...</div>
      <div v-else-if="error" class="alert alert-danger">Erreur : {{ error }}</div>

      <section v-else-if="meteo?.days?.length" class="cards-container">
        <div v-for="(j, index) in meteo.days.slice(0, 3)" :key="j.day_long">
          <Card
            :j="j"
            :index="index"
            :current="index === 0 ? meteo.current.tmp : null"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.cards-container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
}
.title-container {
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 2rem; 
  margin-bottom: 2rem;
}

.title-icon {
  width: 100px;
  height: 100px;
}

h1{
  font-size: 48px!important;
  text-align: center;
  color: #ffffff!important;
}

label {
  font-size: 24px;
  color: #ffffff;
}
.container {
  margin-top: 4rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.select-container {
  position: relative;
  width: 450px;
  margin-bottom: 1.5rem;
}

/* Cache la flèche native */
select {
  width: 100%;
  font-size: 2rem !important;
  padding: 1rem 1rem 1rem 1rem; /* espace pour la flèche custom */
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.01);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}

/* Flèche identique à celle native, mais plus grande */
.select-container::after {
  content: "";
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #ffffff;
  pointer-events: none;
}
@media (max-width: 1024px) {
  .container {
    margin-top: 2rem;
  }
  .cards-container {
    flex-direction: column;
    align-items: center;
    gap: 3rem;         
  }
  h1 {
    font-size: 32px!important;
  }
  .title-container {
  flex-direction: column;
  gap: 1rem; 
  margin-bottom: 1rem;
  }
  .title-icon {
  width: 70px;
  height: 70px;
}
label {
  font-size: 20px;
  color: #ffffff;
}
.select-container {
  width: 300px;
  margin-bottom: 1rem;
}
select {
  font-size: 1.5rem!important;
}
.select-container::after {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
}
}

</style>
