<script setup>
import { onMounted, ref } from 'vue';

import api from '../services/api';
import getRandomNumbers from '../helpers/getRandomNumbers';

import CountryCard from '../components/CountryCard.vue';
import Header from '../components/Header.vue';
import SearchBar from '../components/SearchBar.vue';
import Select from '../components/Select.vue';

const region = ref('');
const searchValue = ref('');

let homeCountriesList = ref([]);
let searchCountriesList = ref([]);
let filterCountriesList = ref([]);

async function fetchRandomCountries() {
  let allCountriesList = [];

  await api.get('/all')
    .then(response => {
      allCountriesList = response.data;
      const randomIndexes = getRandomNumbers(24, allCountriesList.length);

      for (let index of randomIndexes) {
        homeCountriesList.value.push(allCountriesList[index]);
      }
    })
    .catch(error => console.error(error));
}

async function handleSearch(search) {
  searchCountriesList.value = [];
  region.value = '';

  let allCountriesList = [];

  await api.get(`/name/${search}`)
    .then(response => {
      allCountriesList = response.data;

      if (allCountriesList.length > 24) {
        const randomIndexes = getRandomNumbers(24, allCountriesList.length);

        for (let index of randomIndexes) {
          searchCountriesList.value.push(allCountriesList[index]);
        }
      }
      else {
        for (let country of allCountriesList) {
          searchCountriesList.value.push(country);
        }
      }
    })
    .catch(error => console.error(error));
}

async function filterCountries(region) {
  filterCountriesList.value = [];
  searchValue.value = '';

  let allCountriesList = [];

  await api.get(`/region/${region}`)
    .then(response => {
      allCountriesList = response.data;

      if (allCountriesList.length > 24) {
        const randomIndexes = getRandomNumbers(24, allCountriesList.length);

        for (let index of randomIndexes) {
          filterCountriesList.value.push(allCountriesList[index]);
        }
      }
      else {
        for (let country of allCountriesList) {
          filterCountriesList.value.push(country);
        }
      }
    });
}

onMounted(fetchRandomCountries);

</script>

<template>
  <Header />

  <div class="container">
    <SearchBar v-model="searchValue" @input="handleSearch(searchValue)" />

    <Select v-model="region" @change="filterCountries(region)" />
  </div>

  <ul class="countries__list">
    <CountryCard v-if="!searchValue && !region" v-for="country in homeCountriesList" :flag="country.flags.png"
      :name="country.name.common" :population="country.population" :region="country.region"
      :capital="country.capital ? country.capital[0] : ' - '" />

    <CountryCard v-if="searchValue && !region" v-for="country in searchCountriesList" :flag="country.flags.png"
      :name="country.name.common" :population="country.population" :region="country.region"
      :capital="country.capital ? country.capital[0] : ' - '" />

    <CountryCard v-if="region" v-for="country in filterCountriesList" :flag="country.flags.png"
      :name="country.name.common" :population="country.population" :region="country.region"
      :capital="country.capital ? country.capital[0] : ' - '" />
  </ul>
</template>

<style scoped>
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