<script setup>
import { ref } from 'vue';

import CountryCard from '../components/CountryCard.vue';
import Header from '../components/Header.vue';
import SearchBar from '../components/SearchBar.vue';

const region = ref('');
</script>

<template>
  <Header />

  <div class="container">
    <SearchBar />

    <select v-model="region" class="region">
      <option value="" selected disabled hidden>Filter by region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>

  <ul class="countries__list">
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
  </ul>

</template>

<style scoped>
.region {
  background: var(--dark-blue);
  color: var(--white);

  border: none;
  padding: 1rem;

  width: 60%;
  border-radius: 8px;

  border-right: 1rem solid transparent;
}

.countries__list {
  margin: 2rem auto;
}
</style>