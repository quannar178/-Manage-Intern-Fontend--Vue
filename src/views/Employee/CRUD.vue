<template>
  <div class="container-fluid main">
    <h2>Manage employee</h2>
    <h2 v-if="sucess" class="text-success">Sucess!</h2>
    <h2 v-if="error" class="text-success">Error!</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Role</th>
          <th scope="col">Team</th>
          <th scope="col">Project</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in userInfo"
          :key="user.hash"
          @click="handleCRUD(user.id)"
        >
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.leader }}</td>
          <td>{{ user.project }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Action</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label for="id" class="col-sm-3 col-form-label">ID</label>
              <div class="col-sm-9">
                <input
                  id="id"
                  class="form-control"
                  readonly
                  v-model="handleUser.id"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="firstname" class="col-sm-3 col-form-label"
                >First name</label
              >
              <div class="col-sm-9">
                <input
                  id="firstname"
                  type="text"
                  class="form-control"
                  v-model="handleUser.firstname"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="lastname" class="col-sm-3 col-form-label"
                >Last name</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  v-model="handleUser.lastname"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="role" class="col-sm-3 col-form-label">Role</label>
              <div class="col-sm-9">
                <select
                  class="custom-select"
                  id="role"
                  v-model="handleUser.role"
                >
                  <option value="admin">Admin</option>
                  <option value="leader">Leader</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-3 col-form-label"
                >Team</label
              >
              <div class="col-sm-9">
                <input
                  type="number"
                  class="form-control"
                  v-model="handleUser.leader"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-3 col-form-label"
                >Project</label
              >
              <div class="col-sm-9">
                <input
                  type="number"
                  class="form-control"
                  v-model="handleUser.project"
                />
              </div>
            </div>
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
import { getAll, updateUser, deleteUser } from "../../api/user";
var hash = require("object-hash");
export default {
  data() {
    return {
      userInfo: [],
      handleUser: "",
      sucess: false,
      error: false,
    };
  },
  created() {
    getAll()
      .then((res) => {
        this.userInfo = res.data;
        this.userInfo.sort((a, b) => {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        });
        this.userInfo.forEach((user) => {
          user.hash = hash(user);
        });
        console.log(this.userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleCRUD(id) {
      $("#modal").modal("toggle");
      this.userInfo.forEach((user) => {
        if (user.id === id) {
          this.handleUser = { ...user };
        }
      });
    },
    handleUpdate() {
      this.sucess = false;
      this.error = false;
      updateUser(this.handleUser)
        .then((res) => {
          this.sucess = true;
          this.error = false;
          $("#modal").modal("hide");
          this.forceUpdateView();
        })
        .catch((err) => {
          this.sucess = false;
          this.error = true;
          console.log(err);
          $("#modal").modal("hide");
        });
    },
    handleDelete() {
      deleteUser({ id: this.handleUser.id })
        .then((res) => {
          this.sucess = true;
          this.error = false;
          $("#modal").modal("hide");
          this.forceUpdateView();
        })
        .catch((err) => {
          this.sucess = false;
          $("#modal").modal("hide");
          this.error = true;
        });
    },
    forceUpdateView() {
      this.handleUser.hash = hash(this.handleUser);
      for (let index = 0; index < this.userInfo.length; index++) {
        if (this.userInfo[index].id === this.handleUser.id) {
          this.userInfo[index] = this.handleUser;
        }
      }
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
