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
    "todo",
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
      status: {
        type: "string"
      },
      completed: {
        type: "boolean"
      },
      archived: {
        type: "boolean"
      },
      project_ID: {
        type: "string"
      },
      archived_timestamp: {
        type: "timestamp"
      },
      completed_timestamp: {
        type: "timestamp"
      },
      created_timestamp: {
        type: "timestamp"
      },
      last_updated_timestamp: {
        type: "timestamp"
      },
      last_sync_timestamp: {
        type: "timestamp"
      },
      external_provider_ID: {
        type: "string"
      },
      external_item_ID: {
        type: "string"
      }
    },
    function(err) {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function(db, callback) {
  db.dropTable("todo", callback);
};

exports._meta = {
  version: 1
};
