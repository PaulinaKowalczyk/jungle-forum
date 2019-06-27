// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/jungle-forum-db',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
