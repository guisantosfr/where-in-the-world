<script setup>
import Header from '../components/Header.vue';

import ArrowLeft from '../assets/icons/arrow-left.svg';

</script>

<template>
  <Header />

  <div class="container country">
    <router-link to="/" class="country__back">
      <img :src="ArrowLeft" src="Back to home">
      Back
    </router-link>

    <img src="https://flagcdn.com/w320/be.png" alt="Belgium flag" class="country__flag">

    <div class="country__info">
      <h3>Belgium</h3>

      <div class="country__main-info">
        <div>
          <span>Native name: </span>
          <span>Belgie</span>
        </div>

        <div>
          <span>Population: </span>
          <span>11,319,511</span>
        </div>

        <div>
          <span>Region: </span>
          <span>Europe</span>
        </div>

        <div>
          <span>Sub Region: </span>
          <span>Western Europe</span>
        </div>

        <div>
          <span>Capital: </span>
          <span>Brussels</span>
        </div>
      </div>


      <div class="country__more-info">
        <div>
          <span>Top Level Domain: </span>
          <span>.be</span>
        </div>

        <div>
          <span>Currencies: </span>
          <span>Euro</span>
        </div>

        <div>
          <span>Languages: </span>
          <span>Dutch, French, German</span>
        </div>
      </div>

      <div class="country__border">
        <h4>Border Countries:</h4>

        <div class="border__list">
          <router-link to="/">France</router-link>
          <router-link to="/">Germany</router-link>
          <router-link to="/">Netherlands</router-link>
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

.country a {
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

.country__flag {
  width: 90%;
  margin: 0 auto 2rem auto;
}

.country__info {
  margin: 0 1.5rem;
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

.border__list {
  margin: 2rem 0;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>