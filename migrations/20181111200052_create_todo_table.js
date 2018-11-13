exports.up = function(knex, Promise) {
  return knex.schema.createTable("todo", function(t) {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.text("description");
    t.boolean("status");
    t.boolean("completed");
    t.boolean("archived");
    t.integer("project_ID");
    t.timestamp("archived_timestamp");
    t.timestamp("completed_timestamp");
    t.timestamp("created_timestamp");
    t.timestamp("last_updated_timestamp");
    t.timestamp("last_sync_timestamp");
    t.string("external_provider_ID");
    t.string("external_item_ID");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todo");
};
