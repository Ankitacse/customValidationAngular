const customers = require('./route')

function initUser(app) {
  app.use('/api/customers', customers)
}

module.exports = initUser