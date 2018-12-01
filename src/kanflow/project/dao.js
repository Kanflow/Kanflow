// @flow
import type { Project } from "./model";

const knex = require("../../db.js");

async function get(id: number): Promise<Array<number>> {
  return knex("project")
    .where({ ID: id })
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get project with ID ${id} from db ${err}`);
    });
}

async function getAll(): Promise<Array<Project>> {
  return knex("project")
    .select("*")
    .catch(err => {
      throw new Error(`Failed to get all projects from db ${err}`);
    });
}

async function create(p: Project): Promise<number> {
  return knex("project")
    .insert(p)
    .catch(err => {
      throw new Error(`Failed to save project to db ${err}`);
    });
}

async function update(p: Project): Promise<number> {
  return knex("project")
    .where("ID", "=", p.ID)
    .update(p)
    .catch(err => {
      throw new Error(`Failed to complete project and update in db ${err}`);
    });
}
module.exports = { get, getAll, create, update };
