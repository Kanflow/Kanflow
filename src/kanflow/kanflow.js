// @flow
import type { Todo } from "./types";

const knex = require("knex");

function saveTodo(t: Todo) {
  return knex("todo").insert(t);
}

module.exports = { saveTodo };
