<script setup>
const props = defineProps(['flag', 'name', 'population', 'region', 'capital']);
</script>

<template>
  <li class="country">
    <router-link :to="`/details/${props?.name}`">
      <img :src="props?.flag" :alt="`${props?.name} flag`" loading="lazy">

      <div class="country__info">
        <h3>{{ props?.name }}</h3>

        <p>Population: <span>{{ props?.population.toLocaleString() }}</span></p>
        <p>Region: <span>{{ props?.region }}</span></p>
        <p>Capital: <span>{{ props?.capital }}</span></p>
      </div>
    </router-link>
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.country__info {
  padding: 1.5rem 1rem;
}

.country__info h3 {
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

@media(min-width: 800px) {
  .country {
    max-width: 275px;
  }
}
</style>