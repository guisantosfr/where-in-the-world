<script setup>
//const props = defineProps(['searchValue']);
</script>

<template>
  <input class="nosubmit" type="search" placeholder="Search for a country..."
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>
.nosubmit {
  background: var(--dark-blue) url('../assets/icons/search.svg') no-repeat 30px center;

  display: block;
  width: 100%;

  margin: 1.5rem auto;
  padding: 1rem 1rem 1rem 5rem;
  border: none;
  border-radius: 8px;

  color: var(--white);
}

input::placeholder {
  color: var(--white);
}

@media(min-width: 600px) {
  .nosubmit {
    margin: 0;
    width: 50%;
  }
}

@media(min-width: 1000px) {
  .nosubmit {
    width: 40%;
  }
}
</style>