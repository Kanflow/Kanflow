// @flow
import type { Todo } from "../kanflow/types";
import type { Task } from "../todoist/types";

// TODO: Complete translation
function translateTaskToTodo(ts: Task): Todo {
  const td: Todo = {
    name: ts.content,
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
  return td;
}

module.exports = { translateTaskToTodo };
