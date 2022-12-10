<template>
  <BaseCard>
    <BaseButton
      @click="setCurrentComponent('stored-resources')"
      :mode="getStoredResourcesBtnMode"
    >
      Stored resources</BaseButton
    >
    <BaseButton
      @click="setCurrentComponent('add-resource')"
      :mode="getAddResourceBtnMode"
    >
      Add resource
    </BaseButton>
  </BaseCard>
  <keep-alive>
    <component
      :is="currentComponent"
      :resources="storedResources"
      @add-resource="(newResource) => addResources(newResource)"
      :deleteResource="deleteResource"
    ></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import { computed } from 'vue';
export default {
  data() {
    return {
      currentComponent: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google guide',
          description: 'Learn to google.',
          link: 'https://google.com',
        },
      ],
    };
  },

  provide() {
    return {
      resources: computed(() => this.storedResources),
    };
  },

  components: { StoredResources, AddResource },

  computed: {
    getStoredResourcesBtnMode() {
      return this.currentComponent === 'stored-resources' ? null : 'flat';
    },
    getAddResourceBtnMode() {
      return this.currentComponent === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setCurrentComponent(component) {
      this.currentComponent = component;
    },

    addResources(resource) {
      this.storedResources.push(resource);
    },

    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (item) => item.id !== id
      );
    },
  },
};
</script>
