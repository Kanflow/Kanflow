// @flow
const fetch = require("node-fetch");

const TODOIST_BASE_URL = "https://beta.todoist.com/API/v8/";

function getProjects(token: string) {
  return fetch(`${TODOIST_BASE_URL}projects`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      console.error(res.statusText); // TODO: Find a better way to handle errors
    })
    .catch(err => {
      console.error("Error getting projects:", err); // TODO: Find a better way to handle errors
    });
}

function getTasks(token: string) {
  return fetch(`${TODOIST_BASE_URL}tasks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      console.error(res.statusText); // TODO: Find a better way to handle errors
    })
    .catch(err => {
      console.error("Error getting tasks:", err);
    });
}

module.exports = { getTasks, getProjects };
