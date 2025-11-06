<script setup>
import Logo from '@/assets/logo_atmos.svg'
</script>

<template>
  <header class="header">
    <RouterLink to="/" aria-label="Go to home" class="logo-link">
      <Logo class="logo" />
    </RouterLink>

    <nav>
      <!-- menu -->
    </nav>
  </header>
</template>

<style>
.header {
  background: #16131e;
  color: white;
  padding: 1.5rem;
  position: relative;
  z-index: 10000;
}

.logo {
  width: 100px;
  fill: white;
  transition: 0.2s;
}
.logo:hover {
  fill: #EFFF76;
}
</style>
