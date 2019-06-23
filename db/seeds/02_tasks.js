
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          summary: 'a dummy task',
          acceptanceCriteria: 'has to be done soon',
          status: 1,
          limitDate: '2016-06-22 19:10:25-07',
          done: 0,
          user_id: 8 //this one is tricky
        }
      ]);
    });
};