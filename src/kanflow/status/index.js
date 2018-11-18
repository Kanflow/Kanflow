import type { Status } from "../types";

const DBConfig = require("../../../knexfile");

const env = "development";
const knex = require("knex")(DBConfig[env]);

function get(id: number) {
  return knex("status")
    .where({ ID: id })
    .catch(err => {
      throw new Error(`Failed to get status with ID ${id} from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function getAll() {
  return knex("status")
    .select()
    .catch(err => {
      throw new Error(`Failed to get all statuses from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

// TODO: Should this accept a Status type or just the inputs required
function create(s: Status) {
  return knex("status")
    .insert(s)
    .catch(err => {
      throw new Error(`Failed to save status to db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function archive(id: number) {
  return knex("status")
    .where("ID", "=", id)
    .update({ archived: true, archived_timestamp: Date.now() })
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to archive status (ID: ${id}) from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function delete(id: number) {
  return knex("status")
    .where("ID", "=", id)
    .delete()
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to delete status (ID: ${id}) from db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

module.exports = {
  get,
  getAll,
  archive,
  delete,
  create
};
