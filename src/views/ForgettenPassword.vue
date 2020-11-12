<template>
  <div class="container-fluid" style="height: 100vh">
    <div class="row h-100">
      <div class="col my-auto">
        <div
          class="card w-50 mx-auto"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <h1 class="text-center mt-2">Verify reset password</h1>
          <form class="m-3">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="abc@gmail.com"
                v-model="formData.email"
              />
            </div>
            <!-- <div class="form-group">
              <label for="CMND">Số CMND</label>
              <input
                type="text"
                class="form-control"
                id="CMND"
                minlength="9"
                placeholder="123456789"
                v-model="formData.CMND"
              />
            </div> -->
            <h6 class="text-success" v-if="success">Check your email to reset password!</h6>
            <p class="text-danger text-center" :class="{ hidden: !error }">
              Wrong email or CMND?
            </p>

            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto text-wrap"
              style="font-weight: 500;"
              :class="{ disable: loading }"
              @click.prevent="handleForget"
            >
              Continue
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
import { fogetPassword } from "../api/user";
import { setToken } from "../utils/auth";
export default {
  name: "FogettenPassword",
  data() {
    return {
      formData: {
        email: "",
      },
      error: false,
      success: false,
      loading: false,
    };
  },
  methods: {
    handleForget() {
      this.loading = true;
      console.log({ email: this.formData.email });
      fogetPassword(this.formData)
        .then((res) => {
          this.loading = false;
          this.success = true;
          this.error = false;
        })
        .catch((err) => {
          this.loading = false;
          this.success = false;
          this.error = true;
          console.log(err);
        });
    },
    redirectLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped></style>
