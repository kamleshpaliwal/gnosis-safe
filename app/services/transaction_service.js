const transactionService = require('../services/external_transaction_service');
const redisService = require('../services/redis_service');
const utilService = require('../heplers/util');

exports.findOne = async address => {
    try {
      const cacheKey = utilService.getRedisKeyForAddressBalance(address)
      const cacheData = await redisService.getKey(cacheKey)
      if(cacheData){
            return JSON.parse(cacheData)
      }
      const data = await transactionService.getBalanceForAddress(address);
      await redisService.setKey(cacheKey,JSON.stringify(data))
      return data
    } catch (err) {
      throw 'error in finding balance data';
    }
  };


exports.findMultiple = async addresses => {
    if(typeof addresses === "string"){
        addresses=[addresses]
      }
    try {
        let data = []
        for(const address of addresses){
            const balance = await this.findOne(address)
            data.push({address,balance})
        }
        return data
    } catch (err) {
      throw 'error in finding balance data';
    }
  };