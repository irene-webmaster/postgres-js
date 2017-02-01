const settings = require('./settings');

module.exports = function db() {
  const knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database,
      ssl : settings.ssl
    }
  });
  return knex;
}
