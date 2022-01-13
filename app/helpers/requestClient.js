const axios = require("axios");

exports.getRequest = async(url) => {
    return await axios.get(url)
}