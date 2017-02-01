const db = require('./db');
const output = require('./result');
const knex = db();
const person = process.argv[2];

knex.select().from('famous_people').where('first_name', 'like', '%' + person + '%').orWhere('last_name', 'like', '%' + person + '%').asCallback((err, result) => {
  if (err) {
    return console.error("error running query", err);
  }

  output(result);

  knex.destroy();

});




