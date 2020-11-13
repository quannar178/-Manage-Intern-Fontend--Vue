<template>
  <div class="bg-dark sidebar" :class="{ toggleNav: !showSidebar }">
    <h2 class="text-center text-white">
      {{ role[0].toUpperCase() + role.slice(1) }}
    </h2>
    <!-- profile -->
    <a
      class="btn btn-primary w-100"
      type="button"
      data-toggle="collapse"
      data-target="#profile"
    >
      <router-link class="text-white font-weight-bold" to="/profile"
        >Profile</router-link
      >
    </a>

    <!-- project -->
    <a class="btn btn-primary w-100" data-toggle="collapse" href="#Project">
      <router-link class="text-white font-weight-bold" to="/project"
        >Project</router-link
      >
    </a>

    <div class="collapse" id="Project">
      <div class="card card-body">
        <a class="btn secondary w-100" v-if="role == 'admin'">
          <router-link to="/project/summary">Sumary</router-link>
        </a>
        <a class="btn secondary w-100" v-if="role == 'admin'">
          <router-link to="/project/add">Add</router-link>
        </a>
        <a class="btn secondary w-100" v-if="role == 'admin'">
          <router-link to="/project/update/0">Update</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/project/Detail">Detail</router-link>
        </a>
      </div>
    </div>

    <!-- Team -->
    <a
      class="btn btn-primary w-100"
      data-toggle="collapse"
      href="#Team"
      v-if="role == 'leader'"
    >
      <router-link class="text-white font-weight-bold" to="/team"
        >Team</router-link
      >
    </a>
    <div class="collapse" id="Team">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="/team/detail">Detail</router-link>
        </a>
      </div>
    </div>
    <!-- Schedule -->
    <a class="btn btn-primary w-100" data-toggle="collapse" href="#Schedule">
      <router-link class="text-white font-weight-bold" to="/schedule"
        >Schedule</router-link
      >
    </a>

    <div class="collapse" id="Schedule">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="/schedule/draft">Draft</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/schedule/public">Publish</router-link>
        </a>
      </div>
    </div>
    <!-- Employee -->
    <a
      class="btn btn-primary w-100"
      data-toggle="collapse"
      href="#Employee"
      v-if="role == 'admin'"
    >
      <router-link class="text-white font-weight-bold" to="/employee"
        >Employee</router-link
      >
    </a>

    <div class="collapse" id="Employee">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="/employee/monthly-salary"
            >Monthly Salary</router-link
          >
        </a>
        <a class="btn secondary w-100">
          <router-link to="/employee/salary">Overview Salary</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/employee/crud">CRUD</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: `Sidebar`,
  data() {
    return {
      role: "",
      showSidebar: true,
    };
  },
  created() {
    this.role = store.getters.role.toLowerCase() || "User";
    this.showSidebar = store.getters.showSidebar;
  },
};
</script>

<style scoped>
.sidebar {
  width: 20%;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: width 0.4s ease;
}

.toggleNav {
  width: 10%;
}
</style>
