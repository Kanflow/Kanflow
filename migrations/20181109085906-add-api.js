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
    "create role web_anon nologin;" +
      "grant web_anon to postgres;" +
      "grant usage on schema public to web_anon;" +
      "grant select on todo to web_anon;"
  );

  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
