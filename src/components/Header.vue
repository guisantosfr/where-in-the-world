<script setup>
import moonIcon from '../assets/icons/moon.svg';
</script>

<template>
  <header class="header">
    <h3 class="header__title">Where in the world?</h3>

    <div class="header__toggle">
      <img :src="moonIcon" alt="Dark mode moon icon">
      <p>Dark mode</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--dark-blue);

  margin: auto;
  padding: 2rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  font-weight: 600;
  font-size: 1.25rem;
}

.header__toggle {
  display: flex;
  align-items: center;
}

.header__toggle img {
  margin-right: .75rem;
}
</style>