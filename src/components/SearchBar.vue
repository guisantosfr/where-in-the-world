<template>
  <form class="nosubmit">
    <input class="nosubmit" type="search" placeholder="Search for a country...">
  </form>
</template>

<style scoped>
.nosubmit {
  border: none;
  padding: 0;
}

.nosubmit input {
  background: var(--dark-blue) url('../assets/icons/search.svg') no-repeat 30px center;

  display: block;
  width: 100%;

  margin: 1.5rem auto;
  padding: 1rem 1rem 1rem 5rem;
  border-radius: 8px;

  color: var(--white);
}

input::placeholder {
  color: var(--white);
}
</style>