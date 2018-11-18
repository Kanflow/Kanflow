const DBConfig = require("../knexfile.js");

const env = "development";
const knex = require("knex")(DBConfig[env]);

module.exports = knex;
