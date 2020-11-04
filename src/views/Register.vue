<template>
  <div class="container-fluid" style="height: 100%">
    <div class="row h-100">
      <div class="col my-auto">
        <div
          class="card w-50 mx-auto"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <h1 class="text-center mt-2">Sign Up</h1>
          <form class="m-3">
            <div class="form-group">
              <!-- <label for="firstname">First name</label> -->
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First name"
                v-model="firstname"
                required
              />
            </div>
            <div class="form-group">
              <!-- <label for="lastname">Last name</label> -->
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last name"
                v-model="lastname"
                required
              />
            </div>
            <div class="form-group">
              <!-- <label for="email">Email</label> -->
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <!-- <label for="password">Password</label> -->
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="password"
                required
              />
            </div>
            <div class="form-group">
              <!-- <label for="confirm-password">Confirm password</label> -->
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                placeholder="Confirm password"
                v-model="confirmpassword"
                required
              />
            </div>
            <p class="text-danger text-center" v-if="error">
              Wrong form, try again!
            </p>
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto text-wrap"
              style="font-weight: 500;"
              @click.prevent="handleRegister"
            >
              Create New Account
            </button>
            <hr />
            <a class="text-black text-center d-block mb-3">Has account ?</a>
            <button
              type="submit"
              class="btn btn-success d-block p-2 w-50 mx-auto"
              @click.prevent="redirectLogin"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../api/user";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      error: false,
    };
  },
  methods: {
    handleRegister() {
      if (this.password === this.confirmpassword) {
        register({
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
        })
          .then((res) => {
            console.log(res);
            this.$router.push("/login");
          })
          .catch((err) => {
            this.error = true;
            console.log(err);
          });
      } else {
        this.error = true;
      }
    },
    redirectLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
  visibility: hidden;
}
</style>
