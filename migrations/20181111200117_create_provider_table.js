exports.up = function(knex, Promise) {
  return knex.schema.createTable("provider", function(t) {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.timestamp("created_timestamp");
    t.string("API_secret");
    t.string("API_key");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("provider");
};
