<template>
  <main class="notfound">
    <h1>Navigation interstellaire impossible : page introuvable</h1>

    <!-- Astronaut PNG/SVG with gentle float -->
    <img src="@/assets/astronaut.png" alt="Astronaute 404" class="astro" />

    <div class="actions">
      <router-link to="/" class="btn">Retour à l’accueil</router-link>
    </div>
  </main>
</template>

<style scoped>
/* Layout */
.notfound {
  min-height: 70vh;               /* tall enough to center nicely */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 1.5rem);
  text-align: center;
  padding-inline: 1rem;
}

/* Responsive title */
h1 {
  margin: 0;
  margin-top: clamp(1rem, 6vh, 5rem);
  font-size: clamp(1.2rem, 4.5vw, 2.6rem);
  line-height: 1.15;
  letter-spacing: 0.02em;
  color: rgb(232, 234, 236);
}

/* Floating astronaut */
.astro {
  width: clamp(120px, 40vw, 320px);   /* never too tiny, never too huge */
  height: auto;
  animation: float 3.5s ease-in-out infinite;
  will-change: transform;
}

/* Button area */
.actions {
  display: flex;
  gap: 0.75rem;
  margin-top: clamp(0.5rem, 2vw, 1rem);
}

/* Button */
.btn {
  display: inline-block;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #0d0f1a;
  background: #facc02;
  transition: transform 0.2s ease, filter 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.05);
}

/* Float animation */
@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-14px); }
  100% { transform: translateY(0); }
}
</style>
