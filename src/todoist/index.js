// @flow

import type { Task } from "./types";

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
        throw new Error(
          `Failed to get projects from Todoist ${res.statusText}`
        );
      })
      .catch(err => {
        throw new Error(`Failed to get projects from Todoist ${err}`);
      });
  },
  getTasks(): Array<Task> {
    return fetch(`${TODOIST_BASE_URL}tasks`, {
      method: "GET",
      headers: { Authorization: `Bearer ${this.token}` }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Failed to get tasks from Todoist ${res.statusText}`);
      })
      .catch(err => {
        throw new Error(`Failed to get tasks from Todoist ${err}`);
      });
  }
};

module.exports = Todoist;
