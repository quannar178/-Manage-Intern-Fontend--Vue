<template>
  <div class="container-fluid bg-light" style="height: 100vh">
    <div class="row h-100 w-100 my-auto">
      <div class="col my-auto">
        <!-- <div class="card card-block w-75 mx-auto bg-light"> -->
        <h1 class="display-2 text-center mb-4">
          Welcome <br />
          to <br />
          manage website
        </h1>
      </div>
      <div class="col my-auto">
        <div
          class="card card-block w-75 rounded shadow "
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <form class="m-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                required
                aria-describedby="emailHelp"
                v-model="userInfo.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="userInfo.password"
              />
            </div>
            <p class="text-danger text-center" v-if="error">
              Wrong email or password?
            </p>
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto"
              :class="{ disabled: loading }"
              @click.prevent="handleLogin"
            >
              Log In
            </button>
            <a class="text-primary text-center d-block mt-3 link-reset"
              ><router-link to="/forgettenpassword">Forgotten password?</router-link></a
            >
            <hr />
            <button
              type="submit"
              class="btn btn-success d-block p-2 w-50 mx-auto"
              @click.prevent="redirectRegister"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      error: false,
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      // event.preventDefault()
      this.loading = true;

      console.log(this.userInfo);

      this.$store
        .dispatch("user/login", this.userInfo)
        .then(() => {
          console.log();
          this.loading = false;
          console.log("done request");
          this.$router.push("/");
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
          console.log("done request");

          console.log(error);
        });
      // axios
      //   .post("http://localhost:8000/api/auth/login", userInfo)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    redirectRegister(){
      this.$router.push({path: '/register'})
    }
  },
};
</script>

<style scoped>
.link-reset {
  text-decoration: underline !important;
  cursor: pointer;
}

.hidden {
  display: none;
  visibility: hidden;
}
</style>
