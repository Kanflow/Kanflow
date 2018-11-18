// @flow
import type { Status } from "./kanflow/types";

const utils = require("./utils/");
const todoist = require("./todoist/");
const kanflow = require("./kanflow/");

// const tx = todoist
//   .getTasks()
//   .then(tasks => tasks.map(t => utils.translateTaskToTodo(t)))
//   .then(todo => {
//     kanflow.todo.save(todo);
//   });

const s: Status = {
  name: "Backlog",
  description: "Unprioritised tasks",
  archived: false,
  created_timestamp: new Date(),
  last_updated_timestamp: new Date()
};

const s1: Status = {
  name: "Todo",
  description: "Prioritised backlog of tasks",
  archived: false,
  created_timestamp: new Date(),
  last_updated_timestamp: new Date()
};

kanflow.todo.get(3).then(x => console.log(x));
