// @flow
import type { Todo } from "./model";

const knex = require("../../db.js");

async function get(id: number): Promise<Array<Todo>> {
  return knex("todo")
    .where({ ID: id })
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get todo with ID ${id} from db ${err}`);
    });
}

async function getAll(): Promise<Array<Todo>> {
  return knex("todo")
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get all todos from db ${err}`);
    });
}

async function changeStatus(id: number, nextStatusID: number) {
  return knex("todo")
    .where("ID", "=", id)
    .update({
      status_ID: nextStatusID,
      last_updated_timestamp: Date.now()
    })
    .catch(err => {
      throw new Error(
        `Failed to change status on todo and update in db ${err}`
      );
    });
}

async function create(
  name: string,
  desc?: string,
  statusID: number,
  projectID?: number
): Promise<Array<number>> {
  const t: Todo = {
    name,
    description: desc,
    status_ID: statusID,
    project_ID: projectID,
    archived: false,
    completed: false,
    archived_timestamp: null,
    completed_timestamp: null,
    created_timestamp: new Date(),
    last_updated_timestamp: new Date(),
    external_item_ID: "",
    external_provider_ID: "",
    last_sync_timestamp: null
  };
  try {
    const result = await knex('todo').insert(t);
    return result;
  } catch(e) {
    throw new Error(`Failed to create new todo to db ${e}`);
  }
}

async function save(t: Todo): Promise<Array<number>> {
  return knex("todo")
    .insert(t)
    .catch(err => {
      throw new Error(`Failed to save todo to db ${err}`);
    });
}

async function unComplete(id: number): Promise<Array<number>> {
  return knex("todo")
    .where("ID", "=", id)
    .update({
      completed: false,
      completed_timestamp: null,
      last_updated_timestamp: new Date()
    })
    .catch(err => {
      throw new Error(`Failed to uncomplete todo and update in db ${err}`);
    });
}

async function complete(id: number): Promise<Array<number>> {
  return knex("todo")
    .where("ID", "=", id)
    .update({
      completed: true,
      completed_timestamp: new Date(),
      last_updated_timestamp: new Date()
    })
    .catch(err => {
      throw new Error(`Failed to complete todo and update in db ${err}`);
    });
}

async function archive(id: number): Promise<Array<number>> {
  return knex("todo")
    .where("ID", "=", id)
    .update({ archived: true, archived_timestamp: Date.now() })
    .catch(err => {
      throw new Error(`Failed to archive todo (ID: ${id}) from db ${err}`);
    });
}

async function remove(id: number) {
  return knex("todo")
    .where("ID", "=", id)
    .delete()
    .catch(err => {
      throw new Error(`Failed to delete todo (ID: ${id}) from db ${err}`);
    });
}

module.exports = {
  get,
  getAll,
  create,
  remove,
  save,
  changeStatus,
  complete,
  unComplete,
  archive
};
