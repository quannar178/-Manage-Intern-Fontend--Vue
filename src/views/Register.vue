<template>
  <div class="container-fluid" style="height: 100vh">
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
              />
            </div>
            <div class="form-group">
              <!-- <label for="lastname">Last name</label> -->
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last name"
              />
            </div>
            <div class="form-group">
              <!-- <label for="email">Email</label> -->
              <input
                type="password"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <!-- <label for="password">Password</label> -->
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <!-- <label for="confirm-password">Confirm password</label> -->
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto text-wrap"
              style="font-weight: 500;"
            >
              Create New Account
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
export default {};
</script>

<style scoped>
.hidden {
  display: none;
  visibility: hidden;
}
</style>
