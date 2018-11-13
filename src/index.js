// @flow

// import type Todoist from "./todoist/todoist";
import type { Todo } from "./kanflow/types";

const saveTodo = require("./kanflow/kanflow");

const td: Todo = {
  ID: 1,
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
const x = saveTodo(td);
console.log(x);
