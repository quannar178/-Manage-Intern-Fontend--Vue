<template>
  <div class="container-fluid">
    <div v-if="id == 0">
      <h2 class="text-center"></h2>
      <router-link to="/project/summary">Choose project in Summary</router-link>
    </div>
    <div v-else>
      <h2 class="text-center">Update project number {{ id }}</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="projectInfo.name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="projectInfo.description"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Deadline</label>
          <input
            type="date"
            class="form-control"
            required
            v-model="projectInfo.deadline"
          />
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <button
              type="submit"
              class="btn btn-success d-block p-2 w-75 "
              @click.prevent="handleUpdate"
              :class="{ disabled: loading }"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getDetailProject, updateProject } from "../../api/project";
export default {
  data() {
    return {
      projectInfo: {
        name: "",
        description: "",
        deadline: "",
      },
      loading: false,
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params["id"];
    if (this.id != 0) {
      getDetailProject(this.id)
        .then((res) => {
          console.log(res.data);
          this.projectInfo.name = res.data.name;
          this.projectInfo.description = res.data.description;
          this.projectInfo.deadline = res.data.deadline.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    handleUpdate() {
      console.log("in handleupdate", this.id);
      this.loading = true;
      updateProject(this.id, this.projectInfo)
        .then((res) => {
          this.loading = false;
          console.log(res);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
