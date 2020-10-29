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
        <!-- </div> -->
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
            <button
              type="submit"
              class="btn btn-primary d-block p-2 w-75 mx-auto"
              style="font-weight: 500;"
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
export default {};
</script>

<style scoped>
.link-reset {
  text-decoration: underline !important;
  cursor: pointer;
}
</style>
