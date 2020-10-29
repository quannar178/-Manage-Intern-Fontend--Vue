const { getToken } = require("./auth");
const axios = require("axios");

const service = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 5000,
});

// Add a request interceptor
service.interceptors.request.use(
  function(config) {
    if (getToken()) {
      config.headers["authorization"] = getToken();
      console.log("in auth", getToken());
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

module.exports = service