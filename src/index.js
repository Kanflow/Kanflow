// @flow
const kanflow = require("./kanflow/");

async function main() {
  const status1 = await kanflow.status.add();
  const id = await kanflow.todo.add("Cat", "This is a cat");
  const id1 = await kanflow.todo.add("Dog", "This is a dog");
  const id3 = await kanflow.todo.add("Potato", "This is a potato");
}

main();
