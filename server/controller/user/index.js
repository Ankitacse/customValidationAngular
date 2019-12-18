const users = require('./route')

function initUser(app) {
  app.use('/api/users', users)
}

module.exports = initUser