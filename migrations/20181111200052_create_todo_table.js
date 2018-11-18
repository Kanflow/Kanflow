exports.up = function(knex, Promise) {
  return knex.schema.createTable("todo", t => {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.text("description");
    t.integer("status_ID");
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
    t.foreign("status_ID")
      .references("ID")
      .inTable("status");
    t.foreign("project_ID")
      .references("ID")
      .inTable("project");
    t.foreign("external_provider_ID")
      .references("ID")
      .inTable("provider");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todo");
};
