// @flow
import type { Status } from "./kanflow/types";

const utils = require("./utils/");
const todoist = require("./todoist/");
const kanflow = require("./kanflow/");

async function main() {
  const b = await kanflow.todo.complete(1);
  const c = await kanflow.todo.unComplete(1);
  console.log(c);
}

main();
