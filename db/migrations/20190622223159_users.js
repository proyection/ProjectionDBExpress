
exports.up = function(knex, Promise) { //creates table
    
    return knex.schema.createTable("users", (table) => {
        table.increments('id'); //create an id have it autoincrement
        table.string("password");
        table.string("username").unique();
        table.string("confirmPassword");
    })
};

exports.down = function(knex, Promise) { //rollbacks to previous state
    return knex.schema.dropTable("users");
};
