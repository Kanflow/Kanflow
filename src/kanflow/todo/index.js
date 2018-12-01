// @flow
import type { Todo } from "./model";

const todoDAO = require("./dao");
const projectDAO = require("../project/dao");

/*
    You should be able to move an item to a different status
        Shouldn’t be able to move it to a backwards state
        Shouldn’t be able to move it if it violates the WIP of next state
        Shouldn’t be able to move it if it violates the WIP of Current state
    You should only be able to complete a todo item by moving it to the “Done” state
    You should be able to undo any todo transition
*/

async function add(
  name: string,
  description: string,
  projectID?: number
): number {
  // Check if it's being added to a project that the project exists
  if (projectID) {
    try {
      const retrievedID = await projectDAO.get(projectID);
      if (retrievedID.length === 0) {
        throw new Error("Failed to get project when creating todo");
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  try {
    // This dirty piece of code assumes that statusID = 0 is the backlog 🤮
    const newTodo = await todoDAO.create(name, description, 0, projectID);
    return newTodo.shift(); // mmmm tasty
  } catch (err) {
    throw new Error(err);
  }
}

async function remove(id: number) {
  try {
    await todoDAO.remove(id);
    return;
  } catch (err) {
    throw new Error(err);
  }
}

async function archive(id: number) {
  try {
    await todoDAO.archive(id);
    return;
  } catch (err) {
    throw new Error(err);
  }
}

async function getAll(): Array<Todo> {
  try {
    const all = await todoDAO.getAll();
    return all;
  } catch (err) {
    throw new Error(err);
  }
}

// function getById(id: number): Array<Todo> {}

// function archive(id: number): boolean {}

// function changeStatus(t: Todo, newStatus: Status) {}

module.exports = {
  add,
  remove,
  archive,
  getAll
};
