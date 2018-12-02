const todo = require("./index");
const utils = require("../../utils");

beforeEach(() => utils.initialiseDB());

afterEach(() => utils.clearDB());

test("adds a new todo item", async () => {
  const id = await todo.add("Do this", "Elaborate task");
  expect(id).toEqual(1);
});
