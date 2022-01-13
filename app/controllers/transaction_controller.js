const apiHandler = require('../helpers/apihandler');
const transactionService = require('../services/transaction_service');

exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
      const balance = await transactionService.findOne(id);
      if (balance) {
        apiHandler.setSuccessResponse(balance, 'Balance fetched successfully', res);
        return;
      }
      apiHandler.setErrorResponse(
        {
          code: 400,
          message: `No balance found with address id: ${id}.`
        },
        res
      );
    } catch (err) {
      apiHandler.setErrorResponse(
        {
          code: 500,
          message: `Some error occurred while fetching balance with address id: ${id}.`
        },
        res
      );
    }
  };

  exports.findMultiple = async (req, res) => {
    try {
      const balance = await transactionService.findMultiple(req.query.addressList);
      if (balance) {
        apiHandler.setSuccessResponse(balance, 'Balance fetched successfully', res);
        return;
      }
      apiHandler.setErrorResponse(
        {
          code: 400,
          message: `No balance found with address id: ${id}.`
        },
        res
      );
    } catch (err) {
      apiHandler.setErrorResponse(
        {
          code: 500,
          message: `Some error occurred while fetching balance with address id: ${id}.`
        },
        res
      );
    }
  };
