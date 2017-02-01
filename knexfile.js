// Update with your config settings.
const settings = require('./settings');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:     settings.hostname,
      database: settings.database,
      user:     settings.user,
      password: settings.password,
      ssl:      settings.ssl
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
