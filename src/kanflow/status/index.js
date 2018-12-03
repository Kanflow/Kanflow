// @flow
import type { Status } from "./model";

const statusDAO = require("./dao");

// TODO: Need to add business logic
async function add(
  name: string,
  description?: string,
  lower_WIP_limit?: number,
  upper_WIP_limit?: number,
  next_status_ID: number,
  previous_status_ID: number
): Array<number> {
  /* TODO: need to check: 
       - Does the previous status exist
       - Does the next status exist
    */

  try {
    const id = await statusDAO.create(
      name,
      description,
      lower_WIP_limit,
      upper_WIP_limit,
      next_status_ID,
      previous_status_ID
    );
    return id;
  } catch (err) {
    throw new Error(err);
  }
}

async function remove(id: number) {
  try {
    await statusDAO.remove(id);
    return;
  } catch (err) {
    throw new Error(err);
  }
}

async function archive(id: number) {
  try {
    await statusDAO.archive(id);
    return;
  } catch (err) {
    throw new Error(err);
  }
}

async function get(id: number): Array<Status> {
  try {
    const s = await statusDAO.get(id);
    return s;
  } catch (err) {
    throw new Error(err);
  }
}

async function getAll(): Array<Status> {
  try {
    const statuses = await statusDAO.getAll();
    return statuses;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  add,
  remove,
  archive,
  get,
  getAll
};
