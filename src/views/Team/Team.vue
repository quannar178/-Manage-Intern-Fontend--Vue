<template>
  <div class="container-fluid main">
    <h2 class="text-center">Manage Team</h2>
    <!-- <hr /> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Role</th>
          <th scope="col">Gender</th>
          <th scope="col">Project</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in userInfo"
          :key="user.newid"
          @click="handleSchedule(user)"
          style="cursor: pointer;"
        >
          <th scope="row">{{ user.newid }}</th>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.project }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="detail" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Detail {{ handleUser.newid }}: {{ handleUser.firstname }}
              {{ handleUser.lastname }}
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-html="detail"></span>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTeam, getSchedule } from "../../api/user";
export default {
  data() {
    return {
      userInfo: [],
      handleUser: {},
      detail: "",
    };
  },
  created() {
    getTeam()
      .then((res) => {
        this.userInfo = res.data;
        let id = 1;
        this.userInfo.forEach((user) => {
          user.newid = id;
          id++;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleSchedule(user) {
      this.handleUser = user;
      getSchedule(user.id)
        .then((res) => {
          console.log(res);
          const info = res.data.scheduleInfo;
          console.log(info);
          if (info === "No info") {
            this.detail = "";
            this.detail = info;
          } else {
            this.detail = "";
            info.forEach((element) => {
              const day = parseInt(element.slice(0, element.length - 1)) + 1;
              const aggre = element.slice(-1);
              let info = "";
              if (aggre === "M") {
                info = "Morning";
              } else if (aggre === "A") {
                info = "Afternoon";
              } else if (aggre === "F") {
                info = "Full day";
              } else {
                info = "Off";
              }
              this.detail += "Day " + day + " : " + info + "</br>";
            });
          }
        })
        .catch((err) => console.log(err));

      $("#detail").modal("show");
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
