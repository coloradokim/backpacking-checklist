module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/backpacking_prep'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
