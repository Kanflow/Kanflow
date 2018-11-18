// @flow
import type { Project } from "../types";

const knex = require("../../db.js");

function create(p: Project) {
  return knex("project")
    .insert(p)
    .catch(err => {
      throw new Error(`Failed to save project to db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}

function update(p: Project) {
  return knex("project")
    .where("ID", "=", p.ID)
    .update(p)
    .then(query => JSON.stringify(query))
    .catch(err => {
      throw new Error(`Failed to complete project and update in db ${err}`);
    })
    .finally(() => {
      knex.destroy();
    });
}
module.exports = { create, update };
