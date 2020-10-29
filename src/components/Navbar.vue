<template>
  <div class="bg-primary navbar">
    <div class="row h-100 w-100 my-auto d-flex" style="justify-content: space-between">
      <div class="my-auto ml-3">
        <i class="fas fa-bars breadcumb" style="font-size: 25px; color: white"></i>
      </div>
      <div class="my-auto">
          <div class="dropdown container-dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{role}}
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Upload CV</a>
          <a class="dropdown-item" href="#">Profile</a>
          <hr>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
    name: `Navbar`,
    data() {
      return {
        role: store.getters.role || "User"
      }
    },
};
</script>

<style>
.navbar {
  height: 50px;
  width: 80%;
  margin-left: 20%;
}

.breadcumb {
    cursor: pointer;
}

.container-dropdown {
    position: relative;
}

.dropdown-menu-right {
    position: absolute;
    left: -85px;
}
</style>
