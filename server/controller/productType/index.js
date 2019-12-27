const productTypes = require('./route')

function initProductType(app){
    app.use('/api/productTypes',productTypes)
}

module.exports = initProductType