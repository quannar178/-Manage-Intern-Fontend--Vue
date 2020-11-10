<template>
  <div class="container-fluid main">
    <div class="d-flex justify-content-between">
      <h2>Manage employee</h2>

      <button type="button" class="btn btn-primary h-75 mt-1 btn-sm">
        <router-link to="/employee/monthly-salary" class="text-white">
          Create monthly salary
        </router-link>
      </button>
    </div>

    <h2 v-if="sucess" class="text-success">Sucess!</h2>
    <h2 v-if="error" class="text-success">Error!</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Month</th>
          <th scope="col">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in userInfo"
          :key="user.hash"
          @click="handleSalary(user)"
        >
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.month }}</td>
          <td>{{ user.salary }}</td>
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
              <label for="month" class="col-sm-3 col-form-label">Month</label>
              <div class="col-sm-9">
                <input
                  type="number"
                  class="form-control"
                  id="month"
                  v-model="handleUser.month"
                  min="1"
                  max="12"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="salary" class="col-sm-3 col-form-label">Salary</label>
              <div class="col-sm-9">
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  v-model="handleUser.salary"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSalary, updateSalary } from "../../api/user";
var hash = require("object-hash");
export default {
  data() {
    return {
      userInfo: [],
      handleUser: { id: -1 },
      sucess: false,
      error: false,
    };
  },
  created() {
    getSalary()
      .then((res) => {
        // console.log(res.data);
        // console.log(",fdsaf", res.data);
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
    handleSalary(user) {
      console.log("fjdlks");
      $("#modal").modal("toggle");
      console.log(user);
      this.handleUser.id = user.id;
      this.handleUser.firstname = user.firstname;
      this.handleUser.lastname = user.lastname;
      this.handleUser.month = user.month;
      this.handleUser.salary = user.salary;
      console.log(this.handleUser);
    },
    handleUpdate() {
      $("#modal").modal("hide");
      updateSalary({
        idUser: this.handleUser.id,
        month: this.handleUser.month,
        salary: this.handleUser.salary,
      })
        .then((res) => {
          this.forceUpdateView();
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    forceUpdateView() {
      this.handleUser.hash = hash(this.handleUser);
      console.log(this.handleUser.id, this.handleUser.hash);
      for (let index = 0; index < this.userInfo.length; index++) {
        if (this.userInfo[index].id === this.handleUser.id) {
          this.userInfo[index] = this.handleUser;
          console.log("change---");
        }
      }
      console.log(this.userInfo);
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
