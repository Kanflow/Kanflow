import type { Status } from "./model";

const knex = require("../../db.js");

async function get(id: number): Promise<Array<number>> {
  return knex("status")
    .where({ ID: id })
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get status with ID ${id} from db ${err}`);
    });
}

async function getAll(): Promise<Array<Status>> {
  return knex("status")
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get all statuses from db ${err}`);
    });
}

// TODO: Should this accept a Status type or just the inputs required
async function create(
  name: string,
  description?: string,
  lower_WIP_limit?: number,
  upper_WIP_limit?: number,
  next_status_ID: number,
  previous_status_ID: number
): Promise<Array<number>> {
  const s: Status = {
    name,
    description,
    lower_WIP_limit,
    upper_WIP_limit,
    next_status_ID,
    previous_status_ID,
    archived: false,
    created_timestamp: new Date(),
    last_updated_timestamp: new Date()
  };
  return knex("status")
    .insert(s)
    .catch(err => {
      throw new Error(`Failed to save status to db ${err}`);
    });
}

async function archive(id: number): Promise<Array<number>> {
  return knex("status")
    .where("ID", "=", id)
    .update({ archived: true, archived_timestamp: Date.now() })
    .catch(err => {
      throw new Error(`Failed to archive status (ID: ${id}) from db ${err}`);
    });
}

async function remove(id: number) {
  return knex("status")
    .where("ID", "=", id)
    .delete()
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to delete status (ID: ${id}) from db ${err}`);
    });
}

module.exports = {
  get,
  getAll,
  remove,
  archive,
  create
};
