<template>
  <div class="container-fluid main">
    <h2 class="ml-3">Salary in month {{ month }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userInfo" :key="user.hash">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>
            <input
              type="number"
              class="w-100 text-center"
              v-model="user.salary"
              placeholder="0đ"
            />
          </td>
          <td v-if="user.success">
            Success
          </td>
          <td v-if="user.error">
            Error
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div
        class="col-3 mx-auto btn btn-primary w-100 h-100"
        @click="handleUpdateSalary"
      >
        Update
      </div>
    </div>
  </div>
</template>

<script>
import { getAll, updateSalary } from "../../api/user";
var hash = require("object-hash");
export default {
  data() {
    return {
      userInfo: [],
      month: "",
    };
  },
  created() {
    const date = new Date(Date.now());
    this.month = date.getMonth() + 1;
    getAll()
      .then((res) => {
        console.log(res);
        this.userInfo = res.data;
        this.userInfo.sort((a, b) => {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        });
        this.userInfo.forEach((user) => {
          user.hash = hash(user);
          user.success = false;
          user.error = false;
        });
        console.log(this.userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleUpdateSalary() {
      this.userInfo.forEach((user) => {
        if (user.salary) {
          updateSalary({
            idUser: user.id,
            month: this.month,
            salary: user.salary,
          })
            .then((res) => {
              user.success = true;
            })
            .catch((err) => {
              user.error = true;
            });
        }
      });
      this.$router.push("/employee/salary");
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
