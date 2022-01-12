const redis = require('redis');
const client = redis.createClient(process.env.REDIS_HOST,process.env.REDIS_PORT);

exports.connectRedis = async ()=> {
    await client.connect()

}

exports.setKey = async (key,value) => {
    try {
     client.set(key,value)
    } catch (err) {
      throw 'Unable to set key in redis';
    }
};

exports.getKey = async (key) => {
    try {
     return await client.get(key)
    } catch (err) {
      throw 'Unable to delete key in redis';
    }
};

exports.delKey = async (key) => {
    try {
     client.del(key)
    } catch (err) {
      throw 'Unable to delete key in redis';
    }
};