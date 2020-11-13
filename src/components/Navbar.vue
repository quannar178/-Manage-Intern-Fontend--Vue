<template>
  <div class="bg-primary navbar" :class="{ toggleNav: !showSidebar }">
    <div
      class="row h-100 w-100 my-auto d-flex"
      style="justify-content: space-between"
    >
      <div class="my-auto ml-3">
        <i
          class="fas fa-bars breadcumb"
          style="font-size: 25px; color: white"
          @click="handleBreadcumb"
        >
          {{ showSidebar }}
        </i>
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
            {{ role }}
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <a class="dropdown-item"
              ><router-link to="/uploadcv">Upload CV</router-link></a
            >
            <a class="dropdown-item"
              ><router-link to="/profile">Profile</router-link></a
            >
            <hr />
            <!-- <a class="dropdown-item"><router-link to="/resetpassword">Reset password</router-link></a> -->
            <a class="dropdown-item"
              ><router-link to="/logout">Logout</router-link></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: `Navbar`,
  data() {
    return {
      role: store.getters.role || "User",
      showSidebar: true,
    };
  },
  methods: {
    handleBreadcumb() {
      console.log("click");
      store.dispatch("setting/toggleSidebar");
      console.log(store.getters.showSidebar);
      this.showSidebar = store.getters.showSidebar;
    },
  },
  created() {
    this.showSidebar = store.getters.showSidebar;
  },
};
</script>

<style>
.navbar {
  height: 50px;
  width: 80%;
  margin-left: 20%;
  transition: width 0.4s ease;
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

.toggleNav {
  height: 50px;
  width: 90%;
  margin-left: 10%;
}
</style>
