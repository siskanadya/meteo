<script setup>

</script>

<template>
 

  <main class="legal-container">
    <h1>Mentions légales</h1>
    <section>


      <h2>1. Éditeur du site</h2>
      <p>
        Nom du site : <strong>Atmos</strong><br />
        URL : www.atmos.fr<br />
        Éditeur : Atmos<br />
        Responsable de publication : DWWM Bègles AFPA<br />
        Email de contact : contact@atmos.fr
      </p>
      <p>
        Le site Atmos est un projet de développement web visant à proposer des
        informations météorologiques simples, fiables et accessibles à tous.
      </p>
    </section>

    <section>
      <h2>2. Hébergement</h2>
      <p>
        Hébergeur : [Vercel / Netlify / OVH / GitHub Pages]<br />
        Adresse : [adresse du prestataire]<br />
        Téléphone : [numéro du prestataire]
      </p>
    </section>

    <section>
      <h2>3. Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu du site (textes, logos, icônes, illustrations,
        code source, etc.) est protégé par les lois françaises et
        internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, distribution, modification ou réutilisation,
        totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>
    </section>

    <section>
      <h2>4. Données personnelles (RGPD)</h2>
      <p>
        Le site Atmos respecte votre vie privée. Aucune donnée personnelle n’est
        collectée sans votre consentement. Si le site collecte des informations
        (ex. formulaire de contact, newsletter, géolocalisation météo), celles-ci
        sont uniquement utilisées pour le service proposé et ne sont jamais
        revendues ni transmises à des tiers.
      </p>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD)
        et à la loi Informatique et Libertés, vous disposez d’un droit d’accès,
        de rectification, de suppression et d’opposition à vos données.
      </p>
      <p>Pour exercer ce droit, contactez : contact@atmos.fr</p>
    </section>

    <section>
      <h2>5. Responsabilité</h2>
      <p>
        Les informations météorologiques affichées sur Atmos sont fournies à titre
        indicatif. Malgré nos efforts pour garantir leur exactitude, Atmos ne
        saurait être tenue responsable d’erreurs, d’omissions ou de conséquences
        liées à leur utilisation.
      </p>
    </section>

    <section>
      <h2>6. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers d’autres sites. Atmos décline toute
        responsabilité quant au contenu de ces sites tiers.
      </p>
    </section>

    <section>
      <h2>7. Cookies</h2>
      <p>
        Le site Atmos peut utiliser des cookies techniques nécessaires à son bon
        fonctionnement. Aucun cookie publicitaire ni de suivi n’est déposé sans
        votre accord.
      </p>
    </section>

    <section>
      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, les tribunaux compétents seront ceux du ressort de Bordeaux,
        France.
      </p>
    </section>
  </main>

</template>

<style scoped>
h1 {
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 2rem !important;
  font-weight: 600;
  color: #f0ebeb;
  letter-spacing: 0.5px;
  text-align: center; /* plus harmonieux */
}

.legal-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;  /* important : ne pas centrer verticalement */
  padding: 3rem 2rem;
  color: #ece8e8;
  max-width: 900px;             /* largeur agréable pour lecture */
  margin: 0 auto 4rem auto;     /* centré horizontalement, espace avant footer */
  line-height: 1.7;
}

/* Espacement entre les sections */
section {
  margin-bottom: 2.5rem;
}

/* Titres secondaires */
h2 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: #e9e3e7;
  font-weight: 600;
}

/* Paragraphes */
p {
  line-height: 1.6;
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
  color: #e6e0e0;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-container {
    padding: 2rem 1.25rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
