<script setup>
import Header from "@/components/Header.vue";
import StaticStars from "@/components/StaticStars.vue";
import Footer from "@/components/Footer.vue";


</script>

<template>
  <Header />
 <main class="router-view-wrapper">
    <router-view />
  </main>

  <StaticStars
    :count="800"
    :r-min="0.8"
    :r-max="2.2"
    :a-min="0.15"
    :a-max="0.45"
    :z-index="1"
    :colors="[[255,255,255],[210,220,255],[255,250,210]]"
  />

  <Footer />
</template>

