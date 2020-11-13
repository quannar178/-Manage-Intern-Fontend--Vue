<template>
  <div class="container-fluid  main overflow-auto">
    <h2 class="text-center">Profile</h2>
    <hr />
    <div class="row">
      <div class="col-4 font-weight-bold border-right">First name</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="userInfo.firstname" />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Last name</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="userInfo.lastname" />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Email</div>
      <div class="col-8">
        <input
          type="text"
          class="form-control"
          v-model="userInfo.email"
          disabled
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">
        CMND <span class="text-danger">*</span>
      </div>
      <div class="col-8">
        <input
          type="text"
          class="form-control"
          v-model="userInfo.CMND"
          required
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Gender</div>
      <div class="col-8">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="male"
            v-model="userInfo.gender"
          />
          <label class="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="female"
            v-model="userInfo.gender"
          />
          <label class="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Nation</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="userInfo.nation" />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">University</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="userInfo.university" />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Leader</div>
      <div class="col-8">
        <input
          type="text"
          class="form-control"
          v-model="userInfo.leader"
          disabled
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Project ID</div>
      <div class="col-8">
        <input
          type="text"
          class="form-control"
          v-model="userInfo.project"
          disabled
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">CV</div>
      <div class="col-8">
        <div v-if="userInfo.hasCV">
          <a class="span link-reset text-info" @click="handleDownload"
            >Download</a
          >
          <br/>
          <a class="span link-reset text-info" @click="viewCV">View</a>
        </div>

        <p class="text-danger" v-else>You need to upload CV</p>
      </div>
    </div>
    <div class="row">
      <div class="col-4 font-weight-bold border-right">Created At</div>
      <div class="col-8">
        <input
          type="text"
          class="form-control"
          v-model="userInfo.startedat"
          disabled
        />
      </div>
    </div>
    <p class="text-danger text-center" :class="{ hidden: !error }">
      Wrong form?
    </p>
    <h3 class="text-success" v-if="success">Update profile success!</h3>

    <div class="row justify-content-md-center">
      <div class="col-4">
        <div class="btn btn-primary w-100" @click="handleProfile">Change</div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="viewCV" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Title
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="img"></div>
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
const FileDownload = require("js-file-download");
const axios = require("axios");
const { getProfile, updateProfile, downloadCV } = require("../api/user");
export default {
  name: "Profile",
  data() {
    return {
      userInfo: {
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        nation: "",
        startedat: "",
        role: "",
        CMND: "",
        university: "",
        leader: "",
        project: "",
        hasCV: false,
      },
      error: false,
      success: false,
    };
  },
  created() {
    getProfile()
      .then((res) => {
        const { data } = res;
        console.log(data);
        this.userInfo.firstname = data.firstname;
        this.userInfo.lastname = data.lastname;
        this.userInfo.email = data.email;
        this.userInfo.gender = data.gender;
        this.userInfo.nation = data.nation;
        this.userInfo.startedat = data.startedat.slice(0, 10);
        this.userInfo.role = data.role;
        this.userInfo.CMND = data.CMND;
        this.userInfo.university = data.university;
        this.userInfo.leader = data.leader;
        this.userInfo.project = data.project;
        this.userInfo.hasCV = data.hasCV;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleProfile() {
      this.error = false;
      this.success = false;
      const sendData = {
        firstname: this.userInfo.firstname,
        lastname: this.userInfo.lastname,
        CMND: this.userInfo.CMND,
        gender: this.userInfo.gender,
        university: this.userInfo.university,
        nation: this.userInfo.nation,
      };
      console.log("handle profile", sendData);
      updateProfile(sendData)
        .then((res) => {
          this.success = true;
          console.log(res);
        })
        .catch((err) => {
          this.error = true;
          this.success = false;
          console.log(err);
        });
    },
    viewCV() {
      $("#viewCV").modal("show");
      const id = this.$store.getters.id;
      downloadCV({ id: id }).then((response) => {
        console.log(response);
        var reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = function() {
          var base64data = reader.result;
          var image = new Image(400);
          image.src = base64data;
          $("#img").append(image);
          console.log(base64data);
        };
      });
    },
    handleDownload() {
      const id = this.$store.getters.id;
      downloadCV({ id: id }).then((response) => {
        console.log(response);
        const content = response.headers["content-disposition"];
        const index = content.indexOf("filename=");
        const filename = content.slice(index + 9);

        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", filename);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.row {
  margin: 20px;
}
.link-reset {
  text-decoration: underline !important;
  cursor: pointer;
}
</style>
