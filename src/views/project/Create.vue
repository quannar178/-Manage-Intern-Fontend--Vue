<template>
  <div class="container-fluid" style="height: 100%">
    <h3 class="text-center">Add project</h3>
    <form class="m-3">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          required
          v-model="project.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Description</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="project.description"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Deadline</label>
        <input
          type="date"
          class="form-control"
          id="exampleInputEmail1"
          v-model="project.deadline"
        />
      </div>
      <p class="text-danger text-center" v-if="error">
        Wrong form, try again!
      </p>
      <p class="text-success text-center" v-if="success">
        Create project successfully!
      </p>

      <div class="row d-flex justify-content-end">
        <div class="col-2">
          <button
            type="submit"
            class="btn btn-success d-block p-2 w-75 "
            @click.prevent="createProject"
            :class="{ disabled: loading }"
          >
            Create
          </button>
        </div>
        <div class="col-2">
          <button
            type="reset"
            class="btn btn-success d-block p-2 w-75 "
            @click.prevent="resetForm"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { createProject } from "../../api/project";
export default {
  data() {
    return {
      project: {
        name: "",
        description: "",
        deadline: "",
      },
      error: false,
      loading: false,
      success: false
    };
  },
  methods: {
    resetForm() {
      this.project.name = "";
      this.project.description = "";
      this.project.deadline = "";
    },
    createProject() {
      this.loading = true;
      console.log(this.project.deadline);
      createProject({
        name: this.project.name,
        description: this.project.description,
        deadline: this.project.deadline,
      })
        .then((res) => {
          console.log(res);
          this.success = true;
          this.loading = false;
          this.error = false;
        })
        .catch((err) => {
            this.success = false;
          this.loading = false;
          this.error = true;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
