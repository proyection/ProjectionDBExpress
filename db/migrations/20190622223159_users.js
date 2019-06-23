
exports.up = function(knex, Promise) { //creates table
    return knex.schema.createTable("users", (table) => {
        table.increments('id'); //create an id have it autoincrement
        table.string("password");
        table.string("username");
        table.string("confirmPassword");
    })

    // knex.schema.createTable("tasks", (table) => {
    //     table.increments('id'); //create an id have it autoincrement
    //     table.string("summary");
    //     table.string("acceptanceCriteria");
    //     table.integer("status");
    //     table.timestamp("limitDate", { useTz: true });
    //     table.integer("done");
    //     table.foreign('user_id').references('id').inTable('users');
    // })
};

exports.down = function(knex, Promise) { //rollbacks to previous state
    return knex.schema.dropTable("users");
};
