const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('knex');
const database = knex(environmentConfig);

module.exports = database;
