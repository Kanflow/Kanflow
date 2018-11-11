const fetch = require("node-fetch");

class Todoist {
  constructor(token) {
    this.token = token;
    this.base_url = "https://beta.todoist.com/API/v8/";
  }

  getProjects() {
    return fetch(`${this.base_url}projects`, {
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
  }

  getTasks() {
    return fetch(`${this.base_url}tasks`, {
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
}
module.exports = Todoist;
