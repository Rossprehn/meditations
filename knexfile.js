module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///meditations'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
