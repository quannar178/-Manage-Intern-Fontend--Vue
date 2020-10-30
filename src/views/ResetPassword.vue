<template>
  <div class="container-fluid" style="height: 100vh">
    <div class="row h-100">
      <div class="col my-auto">
        <div
          class="card w-50 mx-auto"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <h1 class="text-center mt-2">Reset password</h1>
          <form class="m-3">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="pasword"
              />
            </div>
            <div class="form-group">
              <label for="confirmpassword">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirmpassword"
                v-model="confirmpassword"
              />
            </div>
            <p class="text-danger text-center" :class="{ hidden: !error }">
              Try again?
            </p>
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto text-wrap"
              style="font-weight: 500;"
              @click.prevent="handleReset"
            >
              Change password
            </button>
            <hr />
            <a class="text-black text-center d-block mb-3">Has account ?</a>
            <button
              type="submit"
              class="btn btn-success d-block p-2 w-50 mx-auto"
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
import { resetPassword } from "../api/user";
import { removeToken } from "../utils/auth";
export default {
  name: "ResetPassword",
  data() {
    return {
      pasword: "",
      confirmpassword: "",
      error: false,
    };
  },
  methods: {
    handleReset() {
      if (this.pasword.trim() === this.confirmpassword.trim()) {
        resetPassword({ password: this.pasword.trim() })
          .then((result) => {
            removeToken();
            this.$router.push({ path: "/login" });
          })
          .catch((err) => {
            this.error = true;
          });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped></style>
