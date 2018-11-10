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
    "user",
    {
      ID: {
        type: "string",
        primaryKey: true
      },
      name: {
        type: "string"
      },
      email: {
        type: "string"
      },
      verified: {
        type: "boolean"
      },
      password: {
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
  db.dropTable("user", callback);
};

exports._meta = {
  version: 1
};
