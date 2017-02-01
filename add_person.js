const db = require('./db');
const personFirstName = process.argv[2];
const personLastName = process.argv[3];
const personBirthDate = process.argv[4];
const knex = db();

knex('famous_people').insert({first_name: personFirstName, last_name: personLastName, birthdate: personBirthDate}).asCallback((err, result) => {
  if (err) {
    return console.error("error running query", err);
  }

  console.log(result);

  knex.destroy();

});




