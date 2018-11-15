// @flow
const fetch = require("node-fetch");
require("dotenv").config();

const TODOIST_BASE_URL = "https://beta.todoist.com/API/v8/";
const Todoist = {
  token: process.env.TODOIST_API_KEY,
  getProjects() {
    return fetch(`${TODOIST_BASE_URL}projects`, {
      method: "GET",
      headers: { Authorization: `Bearer ${this.token}` }
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
  },
  getTasks() {
    return fetch(`${TODOIST_BASE_URL}tasks`, {
      method: "GET",
      headers: { Authorization: `Bearer ${this.token}` }
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
};

module.exports = Todoist;
