<template>
  <div class="bg-light main">
    <div class="container-navbar">
      <Navbar />
    </div>
    <div class="container-sidebar">
      <Sidebar />
    </div>
    <div class="container-main bg-light">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import store from "../store";
import Sidebar from "../components/Sidebar";
export default {
  name: `DefaultLayout`,
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
}

.container-main {
  margin-top: 5px;
  height: calc(100vh - 60px);
  width: calc(100vw - 22%);
  margin-left: 21%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  z-index: 10;
}
</style>
