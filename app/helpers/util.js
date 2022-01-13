const balanceConstants = require('../constants/balance');

exports.getRedisKeyForAddressBalance = address => {
   return balanceConstants.BALANCE_CONSTANTS.BALANCE_USD + address
};