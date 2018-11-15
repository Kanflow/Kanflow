// @flow
import type { Todo } from "./kanflow/types";
require("dotenv").config();
const Todoist = require("./todoist/");
const Kanflow = require("./kanflow/");

const ts = Todoist.getTasks(process.env.TODOIST_API_KEY);
ts.then(t => console.log(t));

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
