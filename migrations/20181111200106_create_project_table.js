exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", function(t) {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.text("description");
    t.boolean("completed");
    t.boolean("archived");
    t.timestamp("archived_timestamp");
    t.timestamp("completed_timestamp");
    t.timestamp("created_timestamp");
    t.timestamp("last_updated_timestamp");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("project");
};
