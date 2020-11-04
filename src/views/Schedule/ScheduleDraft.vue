<template>
  <div class="container-fluid main w-100">
    <h2 class="text-center">Draft Schedule: {{ month + 1 }} - {{ year }}</h2>
    <div v-if="day > 5">You cann't register for this month</div>
    <div v-else>
      <p>You can register in {{ 5 - day }} day more.</p>

      <div class="row border-bottom" v-for="day in range" :key="day">
        <div class="col-4 d-flex w-100 h-100  my-auto">Day {{ day + 1 }}</div>
        <div class="col-8">
          <form>
            <input
              type="radio"
              id="off"
              value="O"
              name="day"
              class="mr-3"
              v-model="data[day]"
            />
            <label for="off">Off</label><br />
            <input
              type="radio"
              id="full"
              value="F"
              name="day"
              class="mr-3"
              v-model="data[day]"
            />
            <label for="full">Fullday</label><br />
            <input
              type="radio"
              id="morning"
              value="M"
              name="day"
              class="mr-3"
              v-model="data[day]"
            />
            <label for="morning">Morning</label><br />
            <input
              type="radio"
              id="afternoon"
              value="A"
              name="day"
              class="mr-3"
              v-model="data[day]"
            />
            <label for="afternoon">Afternoon</label><br />
          </form>
        </div>
      </div>
      <h3 class="text-success" v-if="success">Success!</h3>
      <p class="text-danger text-center" :class="{ hidden: !error }">
        Please try again?
      </p>
      <div class="row w-100 mt-3 mb-3">
        <button class="btn btn-info w-25 mx-auto" @click="handleDraft">
          Save draft
        </button>
        <button class="btn btn-info w-25 mx-auto" @click="handlePublic">
          Public
        </button>
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
  methods: {
    handleDraft() {
      // return console.log(this.data);
      let dateInfo = [];
      this.error = false;
      this.success = false;

      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        let day = {};
        day["date"] = this.year + "-" + (this.month + 1) + "-" + (index + 1);
        if (!element) {
          day["draft"] = "O";
        } else {
          day["draft"] = this.data[index];
        }

        dateInfo.push(day);
      }
      const schedule = { schedule: dateInfo };
      console.log(schedule);
      registerschedule(schedule)
        .then((res) => {
          this.success = true;
          this.error = false;
          console.log(res);
        })
        .catch((err) => {
          this.success = false;
          this.error = true;
          console.log(err);
        });
    },
    handlePublic() {
      let dateInfo = [];
      this.error = false;
      this.success = false;
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        let day = {};
        day["date"] = this.year + "-" + (this.month + 1) + "-" + (index + 1);
        if (!element) {
          day["publicSche"] = "O";
        } else {
          day["publicSche"] = this.data[index];
        }

        dateInfo.push(day);
      }
      const schedule = { schedule: dateInfo };
      console.log(schedule);
      publicschedule(schedule)
        .then((res) => {
          this.success = true;
          this.error = false;
          console.log(res);
        })
        .catch((err) => {
          this.success = false;
          this.error = true;
          console.log(err);
        });
    },
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
