// @flow
import type { Todo } from "./types";
const DBConfig = require("../../knexfile");

const knex = require("knex")(DBConfig.development);

function saveTodo(t: Todo) {
  knex("todo")
    .insert({ name: "cat" )
    .then(() => console.log("data inserted"))
    .catch(err => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
}

module.exports = saveTodo;
export type SaveTodo = () => any;
