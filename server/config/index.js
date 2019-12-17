const config = {}

config.PORT = 8000
config.DATABASE_URL = 'mongodb://localhost:27017/jewelrypro',
config.authKey = 'secretkey'
config.mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }
module.exports = config