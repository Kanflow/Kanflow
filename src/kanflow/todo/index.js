import type { Todo } from "../types";

const knex = require("../../db.js");

function get(id: number) {
  return knex("todo")
    .where({ ID: id })
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get todo with ID ${id} from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function getAll() {
  return knex("todo")
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get all todos from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function changeStatus(
  id: number,
  prevStatusID: number,
  currentStatusID: number
) {
  return knex
    .transaction(trx =>
      trx
        .update({
          status_ID: currentStatusID,
          last_updated_timestamp: Date.now()
        })
        .into("todo")
        .where("ID", "=", id)
        .then(() =>
          trx
            .insert({
              todo_ID: id,
              previous_status_ID: prevStatusID,
              current_status_ID: currentStatusID,
              transition_timestamp: new Date()
            })
            .into("status_transition")
        )
        .catch(err => {
          throw new Error(
            `Failed to change status on todo and update in db ${err}`
          );
        })
        .finally(() => {
          knex.destroy();
        })
    )
    .catch(err => {
      throw new Error(`Failed to change status in db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function create(
  name: string,
  desc?: string,
  statusID: number,
  projectID?: number
) {
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
  return knex("todo")
    .insert(t)
    .catch(err => {
      throw new Error(`Failed to create new todo to db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function save(t: Todo) {
  return knex("todo")
    .insert(t)
    .catch(err => {
      throw new Error(`Failed to save todo to db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function unComplete(id: number) {
  return knex("todo")
    .where("ID", "=", id)
    .update({
      completed: false,
      completed_timestamp: null,
      last_updated_timestamp: Date.now()
    })
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to uncomplete todo and update in db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function complete(id: number) {
  return knex("todo")
    .where("ID", "=", id)
    .update({
      completed: true,
      completed_timestamp: Date.now(),
      last_updated_timestamp: Date.now()
    })
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to complete todo and update in db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function archive(id: number) {
  return knex("todo")
    .where("ID", "=", id)
    .update({ archived: true, archived_timestamp: Date.now() })
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to archive todo (ID: ${id}) from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

// function delete(id: number) {
//   return knex("todo")
//     .where("ID", "=", id)
//     .delete()
//     .then(query => JSON.stringify(query))
//     .catch(err => {
//       throw new Error(`Failed to delete todo (ID: ${id}) from db ${err}`);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// }

module.exports = {
  get,
  getAll,
  create,
  save,
  changeStatus,
  complete,
  unComplete,
  archive
};
