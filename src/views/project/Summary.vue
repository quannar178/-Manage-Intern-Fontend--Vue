<template>
  <div class="container-fluid main overflow-auto">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Created At</th>
          <th scope="col">Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in data" :key="project.id" @click="toggle(project)">
          <th scope="row">{{ project.id }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>{{ project.createAt }}</td>
          <td>{{ project.deadline }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choose action</h5>
          </div>
          <div class="modal-body">
            {{ id }} : {{ name }}
            <p class="text-danger text-center" v-if="deleteError">
              Wrong delete, try again!
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="handleUpdate">
              Update
            </button>
            <button type="button" class="btn btn-warning" @click="handleDelete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllProject, deleteProject } from "../../api/project";
export default {
  data() {
    return {
      deleteError: false,
      data: "",
      id: "",
      name: "",
    };
  },
  created() {
    getAllProject()
      .then((res) => {
        this.data = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    toggle(project) {
      $("#exampleModal").modal("toggle");
      this.id = project.id;
      this.name = project.name;
    },
    handleUpdate() {
      $("#exampleModal").modal("hide");

      this.$router.push("/project/update/" + this.id);
    },
    handleDelete() {
      deleteProject(this.id)
        .then((res) => {
          getAllProject()
            .then((res) => {
              this.data = res.data;
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.deleteError = true;
        });
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
