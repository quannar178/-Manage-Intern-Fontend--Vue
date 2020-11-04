<template>
  <div class="container-fluid" style="height: 100%">
    <h1 class="text-center mt-2">Upload CV</h1>
    <form class="m-3" method="post" enctype="multipart/form-data">
      <div class="form-group">
        <!-- <label for="firstname">First name</label> -->
        <input
          type="file"
          class="form-control"
          id="firstname"
          placeholder="First name"
          required
          @change="onFileChange"
        />
      </div>
      <p class="text-danger text-center" :class="{ hidden: !error }">
        Try again?
      </p>
      <h3 class="text-success" v-if="success">Update CV success!</h3>
      <button
        type="submit"
        class="btn btn-primary d-block p-2 w-25 mx-auto text-wrap"
        style="font-weight: 500;"
        :class="{ disable: loading }"
        @click="handleUpload"
      >
        Upload
      </button>
      <hr />
      <button type="submit" class="btn btn-success d-block p-2 w-50 mx-auto" @click="handRedirect">
        View profile
      </button>
    </form>
  </div>
</template>

<script>
import { uploadCV } from "../api/user";
import { getToken } from "../utils/auth";
import axios from "axios";
export default {
  name: "UploadCV",
  data() {
    return {
      file: "",
      error: false,
      success: false,
      loading: false,
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file = files;
      console.log(this.file);
    },

    handleUpload() {
      if (this.file.length == 0) {
        this.error = true;
        return;
      }
      this.loading = true;
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file[0]);
      const token = getToken();
      axios
        .post("http://localhost:8000/api/user/uploadcv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        })
        .then((res) => {
          this.success = true;
          this.error = false;
          this.loading = false;
          console.log("success", res);
        })
        .catch((err) => {
          this.success = false;
          this.error = true;
          this.loading = false;
          console.log("fsdfa", err);
        });
      // .then(() => {
      //   this.loading = false;
      //   this.error = false
      //   this.success = true;
      //   this.console.log("SUCCESS!!");
      // })
      // .catch(() => {
      //   this.loading = false;
      //   this.success = false;
      //   this.error = true;
      //   console.log(err);
      // });
      //   uploadCV(this.formData)
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    },
    handRedirect(){
      this.$router.push('/profile');
    }
  },
};
</script>

<style scoped>
.hidden {
  display: none;
  visibility: hidden;
}
</style>
