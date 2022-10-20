<script setup>
import { onMounted, ref } from 'vue';

import api from '../services/api';
import getRandomNumbers from '../helpers/getRandomNumbers';

import CountryCard from '../components/CountryCard.vue';
import Header from '../components/Header.vue';
import SearchBar from '../components/SearchBar.vue';

const region = ref('');
let homeCountriesList = ref([]);

async function fetchRandomCountries() {
  let allCountriesList = [];

  await api.get('/all')
    .then(response => {
      allCountriesList = response.data;
      const randomIndexes = getRandomNumbers(12, allCountriesList.length);

      for (let index of randomIndexes) {
        homeCountriesList.value.push(allCountriesList[index]);
      }
    })
    .catch(error => console.error(error));
}

onMounted(fetchRandomCountries);

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
    <CountryCard v-for="country in homeCountriesList" :flag="country.flags.png" :name="country.name.common"
      :population="country.population" :region="country.region" :capital="country.capital[0]" />
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

  display: flex;
  flex-direction: column;
}

@media(min-width: 600px) {
  .countries__list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2.5rem;
    width: auto;
  }

  .region {
    width: auto;
  }
}
</style>