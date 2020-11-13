<template>
  <div class="container-fluid main">
    <div v-if="id == -1"><h2>You didn't join any project</h2></div>
    <div v-else>
      <h2 class="text-center mt-3">Detail Project</h2>
      <div class="row mt-4">
        <div class="col-4 text-center ">Name</div>
        <div class="col-8 text-center">{{ name }}</div>
      </div>
      <div class="row mt-4">
        <div class="col-4 text-center ">Description</div>
        <div class="col-8 text-center">{{ description }}</div>
      </div>
      <div class="row mt-4">
        <div class="col-4 text-center">Deadline</div>
        <div class="col-8 text-center">{{ deadline.slice(0, 10) }}</div>
      </div>
    </div>
    <!-- <h3 class="text-center text-danger mt-3">Remaining time: {{remainTime}} </h3> -->
  </div>
</template>

<script>
import { getDetailProject } from "../../api/project";
import { getProfile } from "../../api/user";
export default {
  data() {
    return {
      name: "",
      description: "",
      deadline: "",
      id: "0",
      remainTime: '123123 '
    };
  },
  created() {
    getProfile().then((res) => {
      console.log(res);
      const projectID = res.data.project;
      if (projectID === "No infomation") {
        this.id = -1;
      } else {
        this.id = projectID;
        getDetailProject(this.id)
          .then((res) => {
            console.log(res.data);
            this.name = res.data.name;
            this.description = res.data.description;
            this.deadline = res.data.deadline.slice(0, 10);
            this.remainTime = new Date(res.data.deadline)
          })
          .catch((err) => {
            this.id = -1;
            console.log(err);
          });
      }
    });
    
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.col-4 {
  border-right: 1px solid grey;
}

.text-center{
  font-size: 20px;
}

h2{
  font-size: 30px !important;
}
</style>
