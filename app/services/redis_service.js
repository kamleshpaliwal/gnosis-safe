const redis = require('redis');
const errorMessages = require('../constants/error_messages');
const client = redis.createClient(process.env.REDIS_HOST,process.env.REDIS_PORT);

exports.connectRedis = async ()=> {
    await client.connect()

}

exports.setKey = async (key,value) => {
    try {
     client.set(key,value)
    } catch (err) {
      throw errorMessages.ERROR_MESSAGES.REDIS_SET_ERROR;
    }
};

exports.getKey = async (key) => {
    try {
     return client.get(key)
    } catch (err) {
        throw errorMessages.ERROR_MESSAGES.REDIS_GET_ERROR;
    }
};

exports.delKey = async (key) => {
    try {
     client.del(key)
    } catch (err) {
        throw errorMessages.ERROR_MESSAGES.REDIS_DEL_ERROR;
    }
};
