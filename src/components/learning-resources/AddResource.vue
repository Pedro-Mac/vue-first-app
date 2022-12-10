<template>
  <div>
    <BaseDialog
      v-if="showDialog"
      title="Invalid input"
      @close="() => (showDialog = false)"
    >
      <template #default>
        <p>You must fill in all the inputs</p>
      </template>
      <template #actions>
        <BaseButton @click="() => (showDialog = false)">Ok</BaseButton>
      </template>
    </BaseDialog>

    <BaseCard>
      <form @submit.prevent>
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" type="text" v-model="inputs.title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            type="text"
            v-model="inputs.description"
            rows="3"
          />
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" type="url" v-model="inputs.link" />
        </div>
        <div>
          <BaseButton @click="addResource" type="submit">
            Add resource
          </BaseButton>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        title: '',
        description: '',
        link: '',
      },
      showDialog: false,
    };
  },
  emits: ['addResource'],
  methods: {
    addResource() {
      if (
        !(
          this.inputs.title.trim() &&
          this.inputs.description.trim() &&
          this.inputs.link.trim()
        )
      ) {
        this.showDialog = true;
      } else {
        this.$emit('addResource', {
          title: this.inputs.title,
          description: this.inputs.description,
          link: this.inputs.link,
          id: this.inputs.title.toLowerCase().split(' ').join('-'),
        });

        this.inputs.title = '';
        this.inputs.description = '';
        this.inputs.link = '';
      }
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
