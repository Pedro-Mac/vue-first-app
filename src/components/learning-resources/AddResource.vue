<template>
  <BaseCard>
    <form @submit.prevent>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" type="text" v-model="description" rows="3" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" v-model="link" />
      </div>
      <div>
        <BaseButton @click="addResource" type="submit">Add resource</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    addResource() {
      this.$emit('addResource', {
        title: this.title,
        description: this.description,
        link: this.link,
        id: this.title.toLowerCase().split(' ').join('-'),
      });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
