exports.up = function(knex, Promise) {
  return knex.schema.createTable("status_transition", t => {
    t.increments("ID")
      .unsigned()
      .primary();
    t.integer("todo_ID");
    t.integer("previous_status_ID");
    t.integer("current_status_ID");
    t.timestamp("transition_timestamp");
    t.foreign("todo_ID")
      .references("ID")
      .inTable("todo");
    t.foreign("previous_status_ID")
      .references("ID")
      .inTable("status");
    t.foreign("current_status_ID")
      .references("ID")
      .inTable("status");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("status_transition");
};
