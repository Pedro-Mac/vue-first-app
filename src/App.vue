<template>
  <TheHeader title="RememberMe" />
  <TheResources />
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheResources,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
