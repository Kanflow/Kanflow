exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", t => {
    t.increments("ID")
      .unsigned()
      .primary();
    t.string("name");
    t.string("email");
    t.boolean("verified");
    t.string("password");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
