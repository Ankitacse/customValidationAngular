const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const util = require('util')

/**
 * Appraisal Schema
 */
const AppraisalSchema = new Schema({
    //_id: Schema.Types.ObjectId,
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
     productType: {
        type: Schema.Types.ObjectId,
        ref: 'ProductType',
        default: null
    }, 
    appraisalNumber: {
        type: String,
        required: true    
    },
    customerName: {
        type: String,
        required: true     
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: ''
    },
    customerAddress: {
        type: String,
        required: true
    },
    appraisalDetails: {
        type: String,
        required: true
    },
    appraisalValue: {
        type: Number,
        required: true
    },
    appraisalDate: {
        type: Date,
        default: Date.now
    },
     product: [{
        productType: {
            type: Schema.Types.ObjectId,
            ref: 'ProductType'
        },
        price: {
            type: Number,
            required: true
        },
        details: {
            type: String,
            required: true
        }
    }] 
})
const Appraisal = module.exports = mongoose.model('Appraisal', AppraisalSchema)

/**
 * checking Appraisal Id
 */
module.exports.getAppraisalById = function (id, callback) {
    Appraisal.findById(id, callback)
}

/**
 * Checking Appraisal Email
 */
module.exports.getAppraisalByEmail = function (email, callback) {
    const query = {
        email: email
    }
    Appraisal.findOne(query, callback)
}

/**
 * Listing Appraisal
 */
module.exports.listAppraisal = function (filter, callback) {
    var perPage = 10
    if (filter.per_page) {
        perPage = parseInt(filter.per_page, 10)
    }
    var pageNumber = 0
    if (filter.page_number) {
        pageNumber = parseInt(filter.page_number, 10)
    }

    var sort = {}
    if (filter.sort_field) {
        if (filter.sort_type) {
            sort[filter.sort_field] = parseInt(filter.sort_type, 10)
        } else {
            sort[filter.sort_field] = -1
        }
    } else {
        sort['createdAt'] = -1
    }

    var query = {
        deletedAt: null
    }

    if (filter.firstName) {
        query['firstName'] = {
            '$regex': util.format('.*%s.*', filter.firstName),
            '$options': 'i'
        }
    }

    if (filter.lastName) {
        query['lastName'] = {
            '$regex': util.format('.*%s.*', filter.lastName),
            '$options': 'i'
        }
    }

    if (filter.email) {
        query['email'] = {
            '$regex': util.format('.*%s.*', filter.email),
            '$options': 'i'
        }
    }

    Appraisal.find(query, callback).skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0).limit(perPage).sort(sort)
}

/**
 * Create Appraisal
 */
module.exports.createAppraisal = function (newAppraisal, callback) {
    newAppraisal.save(function (err) {
        if (err) return callback(new Error(err))

        return callback(null, newAppraisal)
    })
}

/**
 * Update Appraisal
 */
module.exports.updateAppraisal = function (id, updateAppraisal, callback) {
    Appraisal.findById(id, function (err, appraisal) {
        if (err) callback(new Error(err))
        appraisal.set(updateAppraisal)
        appraisal.save(callback)
    })
}

/**
 * getAppraisal Number
 */
module.exports.getLastAppraisal = function (callback) {
    Appraisal.findOne({}, callback).sort({ _id: -1 })
}

/**
 * Delete Appraisal
 */
module.exports.deleteAppraisal = function (id, callback) {
    Appraisal.findOneAndDelete({ _id: id }, callback)
  }