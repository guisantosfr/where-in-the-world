<template>
  <li class="country">
    <img src="../assets/brazil-flag.png" alt="Brazil Flag">

    <div class="country__info">
      <h3>Brazil</h3>

      <p>Population: <span>206,135,893</span></p>
      <p>Region: <span>Americas</span></p>
      <p>Capital: <span>Brasília</span></p>
    </div>
  </li>
</template>

<style scoped>
.country {
  max-width: 250px;
  margin: 0 auto 3rem auto;

  border-radius: 8px;

  background: var(--dark-blue);
}

.country img {
  width: 100%;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.country__info {
  padding: 1.5rem 1rem;
}

.country__info h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.country__info p {
  font-weight: 600;
  margin-bottom: .5rem;
}

.country__info span {
  font-weight: 300;
}

@media(min-width: 600px) {
  .country {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>