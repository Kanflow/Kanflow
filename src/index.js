// @flow
import type { Todo, Status } from "./kanflow/types";
import type { Task } from "./todoist/types";
const utils = require("./utils/");
const todoist = require("./todoist/");
const kanflow = require("./kanflow/");

const tasks = todoist.getTasks();

const todos = tasks.then(result => {
  result.map(t => utils.translateTaskToTodo(t));
});
todos.then(todo => {
  kanflow.todo.save(todo);
});

const s: Status = {
  name: "Backlog",
  description: "Unprioritised tasks",
  archived: false,
  archived_timestamp: null,
  created_timestamp: new Date(),
  last_updated_timestamp: new Date()
};

const s1: Status = {
  name: "Todo",
  description: "Prioritised backlog of tasks",
  archived: false,
  archived_timestamp: null,
  created_timestamp: new Date(),
  last_updated_timestamp: new Date()
};

const ID1 = kanflow.status.create(s);
const ID2 = kanflow.status.create(s1);
kanflow.todo.changeStatus(1, ID1, ID2);
const x = kanflow.todo.get(1);
x.then(y => console.log(y));
