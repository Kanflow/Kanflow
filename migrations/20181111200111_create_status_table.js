exports.up = function(knex, Promise) {
  return knex.schema.createTable("status", t => {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.text("description");
    t.integer("lower_WIP_limit");
    t.integer("upper_WIP_limit");
    t.integer("next_status_ID");
    t.integer("previous_status_ID");
    t.boolean("archived");
    t.timestamp("archived_timestamp");
    t.timestamp("created_timestamp");
    t.timestamp("last_updated_timestamp");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("status");
};
