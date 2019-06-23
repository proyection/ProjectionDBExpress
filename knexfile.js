// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'projection-api',
      host: 'localhost',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'projection-api',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
  }
};
