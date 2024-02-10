const { createClient } = require("redis");

// create redis client instance to implement queue service workers
const redisClient = createClient({
  host: process.env.REDIS_DB_HOST,
  port: process.env.REDIS_DB_PORT,
});

module.exports = {
  redisClient,
};
