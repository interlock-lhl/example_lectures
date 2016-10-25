// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'jamessapara',
      password : '',
      database : 'quizes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
