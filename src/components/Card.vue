<script setup lang="ts">
const props = defineProps<{
  j: {
    day_long: string,
    icon: string,
    condition: string,
    tmin: number,
    tmax: number
  },
  index: number,
  current?: number | null
}>()
</script>

<template>
  <section class="card">
    <h2 class="card-title">
      <span v-if="index === 0">Aujourd’hui</span>
      <span v-else-if="index === 1">Demain</span>
      <span v-else>Après-demain</span>
    </h2>

    <div class="card-content">
      <div class="temperatures">
        <p class="temperature">
          {{ current !== null && current !== undefined ? current : j.tmax }}°C
        </p>
        <p>{{ j.tmin }}°C / {{ j.tmax }}°C</p>
      </div>

      <div class="climat">
        <p>
          <img :src="j.icon" :alt="j.condition" width="64" height="64" />
        </p>
        <p>{{ j.condition }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-title {
  text-align: center;
}

.card {
  width: 450px;
  height: 260px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 48px;
  border-radius: 10px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.temperatures,
.climat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.temperature {
  font-size: 2.5rem;
}
</style>
