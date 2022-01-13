const requestClient = require('../helpers/requestClient');
exports.getBalanceForAddress = async address => {
    try {
        const url = process.env.EXTERNAL_GNOSOS_V1_URL + `safes/${address}/balances/usd`
        const val= await requestClient.getRequest(url)
        return val.data
    } catch (err) {
        // we can have a queue based retry mechanism here
      throw `Error in getting data for address ${address}`;
    }
};
