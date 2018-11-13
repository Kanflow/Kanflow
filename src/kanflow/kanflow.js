// @flow
const fetch = require("node-fetch");

/*
 Types
*/
export type Todo = {
  ID: number,
  name: string,
  description: string,
  status: string,
  completed: boolean,
  archived: boolean,
  project_ID: string,
  archived_timestamp: Date,
  completed_timestamp: Date,
  created_timestamp: Date,
  last_updated_timestamp: Date,
  last_sync_timestamp: Date,
  external_provider_ID: string,
  external_item_ID: string
};

export class Kanflow {
  token: string;
  baseURL: string;
  constructor(token: string, baseURL: string) {
    this.token = token;
    this.baseURL = baseURL; // TODO: Change this based on dev / prod
  }

  saveTodo(todo: Todo) {
    fetch(`${this.baseURL}todo`, {
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
