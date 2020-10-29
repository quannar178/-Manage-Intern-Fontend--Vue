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
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <p
              class="text-danger text-center"
              :class="{ hidden: !error }"
            >
              Wrong email or password?
            </p>
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto"
              style="font-weight: 500;"
              :class="{ disabled: loading }"
              @click.prevent="handleLogin"
            >
              Log In
            </button>
            <a class="text-primary text-center d-block mt-3 link-reset"
              >Forgotten password?</a
            >
            <hr />
            <button
              type="submit"
              class="btn btn-success d-block p-2 w-50 mx-auto"
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
    };
  },
  methods: {
    handleLogin() {
      // event.preventDefault()
      // this.loading = true;
      const userInfo = {
        email: "quannar1781@gmail.com",
        password: "123456",
      };

      console.log(userInfo);

      this.$store
        .dispatch("user/login", userInfo)
        .then(() => {
          console.log();
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
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
