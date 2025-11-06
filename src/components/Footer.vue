<script setup>

</script>

<template>
  <footer class="footer">
    <nav class="footer__nav">
      <div class="menu-static-pages">
        <a href="/a-propos">À propos</a>
        <a href="/contact">Contact</a>
        <a href="/mentions-legales">Mentions légales</a>
      </div>

      <div class="menu-social-media">
        <a class="sm-link" href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
          <i class="bi bi-facebook"></i>
        </a>
        <a class="sm-link" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem;
}

.footer__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.125rem;
}

/* liens de navigation */
.menu-static-pages {
  display: flex;
  gap: 2.5rem;
}

.menu-static-pages a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1.125rem;
  transition: color 0.2s ease;
}

.menu-static-pages a:hover {
  color: #EFFF76;
  transform: scale(1.1);
}

/* icônes */
.menu-social-media {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.sm-link {
  color: rgb(255, 255, 255);
  /* couleur initiale */
  font-size: 1.6rem;
  /* taille des icônes */
  transition: color 0.3s ease, transform 0.3s ease;

}

.sm-link:hover {
  color: #EFFF76;
  /* couleur au survol */
  transform: scale(1.1);
}
@media (max-width: 530px) {
  .footer__nav {
  display: flex;
  flex-direction: column;
}

.menu-static-pages {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:1.5rem;
}
}
</style>
