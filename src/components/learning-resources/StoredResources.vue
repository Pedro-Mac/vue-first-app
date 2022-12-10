<template>
  <ul>
    <LearningResource
      v-for="resource in resources.value"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      :onClick="deleteResource"
      :id="resource.id"
    >
    </LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource,
  },

  inject: ['resources'],

  props: ['deleteResource'],

  updated() {
    console.log({ resources: this.resources });
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
