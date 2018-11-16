// @flow
import type { Todo } from "./kanflow/types";
import type { Task } from "./todoist/types";
const utils = require("./utils/");
const Todoist = require("./todoist/");
const Kanflow = require("./kanflow/");
const tasks = Todoist.getTasks();
const todos = tasks.then(result =>
  result.map(t => utils.translateTaskToTodo(t))
);
todos.then(todo => Kanflow.saveTodo(todo));
