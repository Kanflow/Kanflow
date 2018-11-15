// @flow
import type { Todo } from "./kanflow/types";
import type { Task } from "./todoist/types";
const utils = require("./utils/");
const Todoist = require("./todoist/");
const Kanflow = require("./kanflow/");
const ts = Todoist.getTasks();
const xz = ts.then(result => console.log(utils.translateTaskToTodo(result[0])));

const td: Todo = {
  name: "Test",
  description: "",
  status: "",
  archived: false,
  completed: false,
  project_ID: "",
  archived_timestamp: new Date(),
  last_updated_timestamp: new Date(),
  last_sync_timestamp: new Date(),
  completed_timestamp: new Date(),
  created_timestamp: new Date(),
  external_provider_ID: "",
  external_item_ID: ""
};
const x = Kanflow.saveTodo(td);
x.then(y => console.log(y));
