module.exports = app => {
    const transactionController = require('../controllers/transaction_controller.js')
    let router = require('express').Router()
      // Retrieve a balance with address id
    router.get('/addresses', transactionController.findMultiple)
    router.get('/addresses/:id', transactionController.findOne)
    app.use('/api/balance', router)
  }
