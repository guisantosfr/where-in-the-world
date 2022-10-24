<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import Header from '../components/Header.vue';
import ArrowLeft from '../assets/icons/arrow-left.svg';

import api from '../services/api';

const route = useRoute();
const country = ref();
const borderCountries = ref();

function getCurrencies(country) {
  let currencies = ''

  for (let currency of Object.entries(country.currencies)) {
    currencies += currency[1].name;
  }

  return currencies;
}

async function getBorderCountries(borders) {
  if (!borders) return;

  await api.get(`/alpha?codes=${Object.values(borders).join()}`)
    .then(response => {
      borderCountries.value = response.data.map(country => country.name.common);
    })
    .catch(error => console.error(error));
}

onMounted(async () => {
  await api.get(`/name/${route.params.countryName}`)
    .then(response => {
      country.value = response.data[0];
      getBorderCountries(country.value.borders);
    })
    .catch(error => console.error(error));
});

</script>

<template>
  <Header />

  <div class="container country" v-if="country">
    <router-link to="/" class="country__back">
      <img :src="ArrowLeft" alt="Back to home">
      Back
    </router-link>

    <div class="country__details">
      <div>
        <img :src="country.flags.png" :alt="`${country.name.common} flag`" class="country__flag">
      </div>

      <div class="country__info">
        <div class="country__main-info">
          <h3>{{ country.name.common }}</h3>
          <div>
            <span>Native name: </span>
            <span>{{ country.name.nativeName[Object.keys(country.languages)[0]].common }}</span>
          </div>

          <div>
            <span>Population: </span>
            <span>{{ country.population.toLocaleString() }}</span>
          </div>

          <div>
            <span>Region: </span>
            <span>{{ country.region }}</span>
          </div>

          <div>
            <span>Sub Region: </span>
            <span>{{ country.subregion }}</span>
          </div>

          <div>
            <span>Capital: </span>
            <span>{{ country.capital[0] }}</span>
          </div>
        </div>

        <div class="country__more-info">
          <div>
            <span>Top Level Domain: </span>
            <span>{{ country.tld[0] }}</span>
          </div>

          <div>
            <span>Currencies: </span>
            <span>{{ getCurrencies(country) }}</span>
          </div>

          <div>
            <span>Languages: </span>
            <span>{{ Object.values(country.languages).join(', ') }}</span>
          </div>
        </div>

        <div class="country__border">
          <h4>Border Countries:</h4>

          <ul class="border__list" v-if="borderCountries">
            <li v-for="borderCountry in borderCountries">{{ borderCountry }}</li>
          </ul>

          <p v-else>None</p>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.country {
  display: flex;
  flex-direction: column;
}

.country a,
.country li {
  padding: .5em 1em;
  background: var(--dark-blue);
  color: var(--white);
  text-decoration: none;
  border-radius: 3px;
  text-align: center;
}

.country__back {
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 2rem 0 2rem 1rem;
  width: 20%;
}

.country__details {
  margin: 0 1.5rem;
}

.country__flag {
  display: flex;

  width: 100%;
  max-width: 450px;

  margin: 0 auto 2rem auto;
}

.country__info h3 {
  margin-bottom: 2.5rem;
}

.country__main-info div span:first-child,
.country__more-info div span:first-child {
  font-weight: 600;
}

.country__main-info div {
  margin-top: 1.25rem;
}

.country__more-info {
  margin: 3rem 0;
}

.country__more-info div {
  margin-bottom: 1.25rem;
}

.country__border h4 {
  font-weight: 600;
}

.country__border p {
  margin: 1rem 0;
}

.border__list {
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
}

.border__list li {
  margin-bottom: .5rem;
}

@media(min-width: 600px) {
  .country__back {
    width: 17.5%;
    max-width: 120px;
  }

  .country__info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .country__border {
    margin-top: 2.5rem;
  }
}

@media(min-width: 900px) {
  .country__details {
    display: flex;
    justify-content: space-around;

    margin-top: 1rem;
  }

  .country__details div:first-child {
    margin-right: 2rem;
  }

  .country__info {
    justify-content: space-between;
    width: 57.5%;
  }

  .country__more-info {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
}
</style>