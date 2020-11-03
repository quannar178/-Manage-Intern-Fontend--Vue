<template>
  <div class="container-fluid main w-100 overflow-auto">
    <div class="row w-100">
      <div class="col-4 border-right">Choose month:</div>
      <div class="col-8 border-right">
        <input type="month" v-model="choosedMonth" @change="log" />
        {{ choosedMonth }}
      </div>
      <p class="text-danger text-center" v-if="isPast">
        You don't have permission change the past schedule
      </p>
    </div>
    <div v-for="item in ranges" :key="item" class="row w-100 border-bottom">
      <div class="col-4 border-right text-center h-100 my-auto">
        Day {{ item + 1 }}
      </div>
      <div class="col-8">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="O"
            checked
            v-model="draft[item]"
          />
          <label class="form-check-label" for="exampleRadios1">
            Off
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value="F" v-model="draft[item]" />
          <label class="form-check-label" for="exampleRadios1">
            Full day
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value="M" v-model="draft[item]"/>
          <label class="form-check-label" for="exampleRadios1">
            Morning
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value="A" v-model="draft[item]"/>
          <label class="form-check-label" for="exampleRadios1">
            Afternoon
          </label>
        </div>
      </div>
    </div>
    <button class="btn btn-info w-25 mx-auto mt-3" @click="showdata">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choosedMonth: "2021-07",
      isPast: false,
      ranges: [],
      draft: []
    };
  },
  methods: {
    log() {
      this.isPast = false;
      const date = new Date(this.choosedMonth);
      const dateNow = new Date();
      let lastDate = 0;
      if (date.getTime() < dateNow.getTime()) {
        this.isPast = true;
      } else {
        const date = new Date(
          this.choosedMonth.slice(0, 4),
          this.choosedMonth.slice(5, 7) + 1,
          1,
          0,
          0,
          0,
          0,
          0
        );
        lastDate = new Date(date - 1).getDate();

        this.ranges = [...Array(lastDate).keys()];
      }
      console.log(dateNow);
      console.log("choose", lastDate);
    },
    showdata(){
        console.log(this.draft);
    }
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
