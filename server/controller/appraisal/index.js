const appraisals = require('./route')

function initAppraisal(app){
    app.use('/api/appraisals',appraisals)
}

module.exports = initAppraisal
