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

exports.up = function(db, callback) {
  db.createTable(
    "status",
    {
      ID: {
        type: "string",
        primaryKey: true
      },
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      archived: {
        type: "boolean"
      },
      archived_timestamp: {
        type: "timestamp"
      },
      created_timestamp: {
        type: "timestamp"
      },
      last_updated_timestamp: {
        type: "timestamp"
      }
    },
    function(err) {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function(db, callback) {
  db.dropTable("status", callback);
};

exports._meta = {
  version: 1
};
