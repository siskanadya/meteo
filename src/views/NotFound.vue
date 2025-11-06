<template>
  <main class="main">
    <h1>Navigation interstellaire impossible : page introuvable 🚀</h1>
    <!-- mets ici ton PNG astronaute transparent -->
    <img src="@/assets/astronaut.png" alt="404 astronaut" class="astro" />

    <div class="actions">
      <router-link to="/" class="btn">Retour à l'accueil</router-link>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}
h1 {
    margin-top: 5rem;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 0.02em;
  color: rgb(232, 234, 236);
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}


.astro {
width:25%;
  height: auto;
  animation: float 3.5s ease-in-out infinite;
}
.actions {
  display: flex;
  gap: 0.75rem;
}
.btn {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1.125rem;
  transition: color 0.2s ease;
}

.btn:hover{
     transform: scale(1.1);
}

</style>
