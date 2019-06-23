
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          password: 'testing321', 
          username: 'dominic@gmail.com', 
          confirmPassword: 'testing321' 
        },
        {
          password: 'testing321', 
          username: 'enzo@gmail.com', 
          confirmPassword: 'testing321' 
        }
      ]);
    });
};
