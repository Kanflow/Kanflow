const fetch = require("node-fetch");

/*
  Models
*/
function Todo() {
  this.ID = null;
  this.name = null;
  this.description = null;
  this.status = null;
  this.completed = false;
  this.archived = false;
  this.project_ID = null;
  this.archived_timestamp = null;
  this.completed_timestamp = null;
  this.created_timestamp = new Date().toISOString(); // TODO: What timezone?
  this.last_updated_timestamp_timestamp = null;
  this.last_sync_timestamp = null;
  this.external_provider_ID = null;
  this.external_item_ID = null;
}

/* 
  Functions
*/
class Kanflow {
  constructor(token) {
    this.token = token;
    this.base_url = "http://localhost:3000/"; // TODO: Change this based on dev / prod
  }

  saveTodo(todo) {
    fetch(`${this.base_url}todo`, {
      method: "POST",
      body: JSON.stringify(todo, (k, v) => {
        // TODO: Find a better way
        if (v !== null) {
          return v;
        }
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error(res.statusCode); // TODO: Do something useful here
          console.error(res.statusText);
        }
      })
      .catch(err => {
        console.error("Error getting projects:", err);
      });
  }
}
module.exports = { Todo, Kanflow };
