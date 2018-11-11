"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.runSql(
    "CREATE ROLE web_anon NOLOGIN;" +
      "GRANT web_anon TO postgres;" +
      "GRANT USAGE ON schema public TO web_anon;" +
      "GRANT SELECT ON todo TO web_anon;" +
      "CREATE ROLE kanflow_user NOLOGIN;" +
      "GRANT kanflow_user TO postgres;" +
      "GRANT usage ON SCHEMA public TO kanflow_user;" +
      "GRANT ALL ON todo TO kanflow_user;" +
      'GRANT USAGE, SELECT ON sequence "todo_ID_seq" to kanflow_user;'
  );

  return null;
};

exports.down = function(db) {
  db.runSql(
    "DROP OWNED BY web_anon;" +
      "DROP OWNED BY kanflow_user;" +
      "DROP ROLE web_anon;" +
      "DROP ROLE kanflow_user;"
  );
  return null;
};

exports._meta = {
  version: 1
};
