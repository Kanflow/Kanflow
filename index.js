const Todoist = require("./todoist/todoist");
const { Todo, Kanflow } = require("./kanflow/kanflow");
const TODOIST_TOKEN = "supersecuretokenhere";
const KANFLOW_TOKEN = "SUPERLONGTOKEN";

const td = new Todo();
const kf = new Kanflow(KANFLOW_TOKEN);
td.name = "cat";
kf.saveTodo(td);
