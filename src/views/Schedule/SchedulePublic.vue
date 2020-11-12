<template>
  <div class="container-fluid main w-100">
    <h2 class="text-center">Draft Schedule: {{ month + 1 }} - {{ year }}</h2>
      <div class="row border-bottom" v-for="day in range" :key="day">
        <div class="col-4 d-flex w-100 h-100  my-auto">Day {{ day + 1 }}</div>
        <div class="col-8">
          <div v-if="data[day] == 'A'">Afternoon</div>
          <div v-else-if="data[day] == 'F'">Fullday</div>
          <div v-else-if="data[day] == 'M'">Morning</div>
          <div v-else>Off</div>

        </div>
      </div>
  </div>
</template>

<script>
import { registerschedule, publicschedule, getSchedule } from "../../api/user";
export default {
  data() {
    return {
      year: "",
      month: "",
      day: "",
      range: "",
      data: [],
      success: false,
      error: false,
    };
  },
  created() {
    const now = new Date(Date.now());
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.day = now.getDate();
    const lastDayOfMonth = new Date(this.year, this.month + 1, 0).getDate();
    this.range = [...Array(lastDayOfMonth).keys()];
    getSchedule(this.$store.getters.id)
      .then((res) => {
        this.data = res.data.scheduleInfo;
        console.log(res.data.scheduleInfo);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.main {
  overflow-y: scroll;
  height: 100%;
}
.hidden {
  display: none;
  visibility: hidden;
}
</style>
