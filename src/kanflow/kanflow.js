// @flow
import type { Todo } from "./types";

const DBConfig = require("../../knexfile");

const knex = require("knex")(DBConfig.development);

function saveTodo(t: Todo) {
  return knex("todo")
    .insert(t)
    .catch(err => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
}

function completeTodo(t: Todo) {
  knex("todo")
    .where("ID", "=", t.ID)
    .update({ completed: true, completed_timestamp: Date.now() })
    .then(query => {
      return JSON.stringify(query);
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
}

module.exports = { saveTodo, completeTodo };
