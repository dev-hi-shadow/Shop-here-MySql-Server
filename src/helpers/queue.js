const Queue = require("bee-queue");
const { redisClient } = require("../config/redis");
const { QUEUE_INFO } = require("../constants");
const { sendEmailBasedOnType } = require("./email_queue_helpers");

const asyncEmailQueue = new Queue(QUEUE_INFO.ASYNC_EMAIL_QUEUE.NAME, {
  redis: redisClient,
  removeOnSuccess: true,
  isWorker: true,
});

asyncEmailQueue.process(
  QUEUE_INFO.ASYNC_EMAIL_QUEUE.LIMIT,
  async (job, done) => {
    try {
      const { type = "", data = {} } = job?.data;
      await sendEmailBasedOnType(type, data);
      done();
    } catch (error) {
      if (job?.options?.retries > 0) {
        job?.retry(1000);
      } else {
        done();
      }
    }
  }
);

const asyncGeneralQueue = new Queue(QUEUE_INFO.GENARAL_QUEUE.NAME, {
  redis: redisClient,
  removeOnSuccess: true,
  isWorker: true,
});

asyncGeneralQueue.process(QUEUE_INFO.GENARAL_QUEUE.LIMIT, async (job, done) => {
  try {
    const { type = "", data = {} } = job?.data;
    await performActionBasedOnType(type, data);
    done();
  } catch (error) {
    if (job?.options.retries > 0) {
      job.retry(1000);
    } else {
      done();
    }
  }
});

module.exports = {
  asyncEmailQueue,
  asyncGeneralQueue,
};
