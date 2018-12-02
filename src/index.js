// @flow
const kanflow = require("./kanflow/");

async function main() {
  const backlogStatus = await kanflow.status.add(
    "Backlog",
    "Dumping ground",
    -1,
    -1,
    2,
    1
  );
  const todoStatus = await kanflow.status.add(
    "Todo",
    "Prioritised",
    -1,
    -1,
    3,
    1
  );
  const inProgressStatus = await kanflow.status.add(
    "In-Progress",
    "Work currently happening",
    -1,
    -1,
    4,
    2
  );
  const doneStatus = await kanflow.status.add(
    "Done",
    "Completed work",
    -1,
    -1,
    4,
    3
  );
  await kanflow.todo.changeStatus(6, 4);
  const t = await kanflow.todo.get(6);
  console.log(t);
}

main();
