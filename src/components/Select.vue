<script setup>
const props = defineProps(['region']);
</script>

<template>
  <select v-model="region" class="region">
    <option :value="undefined" selected disabled hidden>Filter by region</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
</template>

<style scoped>
.region {
  background: var(--dark-blue);
  color: var(--white);

  border: none;
  padding: 1rem;

  border-radius: 8px;

  border-right: 1rem solid transparent;
}
</style>