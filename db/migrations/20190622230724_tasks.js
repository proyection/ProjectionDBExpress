
exports.up = function(knex, Promise) {
    return knex.schema.createTable("tasks", (table) => {
         table.increments('id'); //create an id have it autoincrement
         table.string("summary");
         table.string("acceptanceCriteria");
         table.integer("status");
         table.timestamp("limitDate", { useTz: true });
         table.integer("done");
         table.integer('user_id').unsigned().notNullable();
         table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("tasks");
};
