module.exports.up = function (knex) {
  return knex.schema.createTable("trash_cans", (table) => {
    table.increments("id").primary();
    table.decimal("latitude").notNullable;
    table.decimal("longitude").notNullable;
    table.boolean("is_recyclable").notNullable;
  });
};

module.exports.down = function (knex) {
  return knex.schema.dropTable("trash_cans");
};
