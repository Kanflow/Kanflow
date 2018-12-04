// @flow
import type { Todo } from "../kanflow/todo/model";
import type { Task } from "../todoist/types";

const knex = require("../db.js");

function clearDB() {
  knex.migrate.rollback();
}

function initialiseDB() {
  knex.migrate.latest();
}

function translateTaskToTodo(ts: Task): Todo {
  const td: Todo = {
    name: ts.content,
    description: "",
    status_ID: 0,
    archived: false,
    completed: false,
    project_ID: 0,
    archived_timestamp: null,
    last_updated_timestamp: null,
    last_sync_timestamp: new Date(),
    completed_timestamp: null,
    created_timestamp: null,
    external_provider_ID: "",
    external_item_ID: ts.id.toString()
  };
  return td;
}

module.exports = { translateTaskToTodo, clearDB, initialiseDB };
