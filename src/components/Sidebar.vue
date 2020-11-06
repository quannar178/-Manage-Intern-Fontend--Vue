<template>
  <div class="bg-dark sidebar">
    <h2 class="text-center text-white">{{ role }}</h2>
    <!-- profile -->
    <a
      class="btn btn-primary w-100"
      type="button"
      data-toggle="collapse"
      data-target="#profile"
    >
      <router-link class="text-white" to="/profile">Profile</router-link>
    </a>

    <!-- project -->
    <a class="btn btn-primary w-100" data-toggle="collapse" href="#Project">
      <router-link class="text-white" to="/project">Project</router-link>
    </a>

    <div class="collapse" id="Project">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="/project/summary">Sumary</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/project/add">Add</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/project/update/0">Update</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="/project/Detail">Detail</router-link>
        </a>
      </div>
    </div>
    <!-- Schedule -->
    <a class="btn btn-primary w-100" data-toggle="collapse" href="#Schedule">
      <router-link class="text-white" to="/schedule">Schedule</router-link>
    </a>

    <div class="collapse" id="Schedule">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="/schedule/draft">Draft</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="">Publish</router-link>
        </a>
      </div>
    </div>
    <!-- Employee -->
    <a class="btn btn-primary w-100" data-toggle="collapse" href="#Employee">
      <router-link class="text-white" to="">Employee</router-link>
    </a>

    <div class="collapse" id="Employee">
      <div class="card card-body">
        <a class="btn secondary w-100">
          <router-link to="">Salary</router-link>
        </a>
        <a class="btn secondary w-100">
          <router-link to="">CRUB</router-link>
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
    };
  },
  created() {
    this.role = store.getters.role || "User";
  },
};
</script>

<style>
.sidebar {
  width: 20%;
  height: 100vh;
  position: absolute;
  top: 0;
}
</style>
