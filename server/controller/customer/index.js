const customers = require('./route')

function initCustomer(app) {
  app.use('/api/customers', customers)
}

module.exports = initCustomer