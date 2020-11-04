const request = require("../utils/request");
const createProject = (data) => {
  return request({
    url: "/api/project/create",
    method: "post",
    data,
  });
};

const getAllProject = () => {
  return request({
    url: "/api/project/getall",
    method: "get",
  });
};
const deleteProject = (id) => {
  return request({
    url: "/api/project/" + id,
    method: "delete",
  });
};

const getDetailProject = (id) => {
  return request({
    url: "/api/project/" + id,
    method: "GET",
  });
};

const updateProject = (id, data) => {
  return request({
    url: 'api/project/' + id,
    method: 'PUT',
    data
  })
}

module.exports = {
  createProject,
  getAllProject,
  deleteProject,
  updateProject,
  getDetailProject
};
