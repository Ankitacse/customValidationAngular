const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const util = require('util')

/**
 * Customer Schema
 */
const CustomerSchema = mongoose.Schema({
    customerNumber: {
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
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    homePhone: {
        type: String,
        required: true
    },
    mobilePhone: {
        type: String,
        required: true
    },
    workPhone: {
        type: String,
        required: true
    },
    spouseFullName: {
        type: String,
        required: true
    },
    spouseBirthday: {
        type: String,
        required: true
    },
    emailOptIn: {
        type: Boolean,
        default: false
    },
    customerType: {
        type: String,
        enum: ['Wholesale', 'Retail'],
        default: 'Retail'
    },
    created: {
        type: Date,
        default: Date.now
    }

});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema)

/**
 * checking Customer Id
 */
module.exports.getCustomerById = function (id, callback) {
    Customer.findById(id, callback)
}

/**
 * Checking Customer Email
 */
module.exports.getCustomerByEmail = function (email, callback) {
    const query = {
        email: email
    }
    Customer.findOne(query, callback)
}

/**
 * Listing Customer
 */
module.exports.listCustomer = function (filter, callback) {
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

    if (filter.fullName) {
        query['fullName'] = {
            '$regex': util.format('.*%s.*', filter.fullName),
            '$options': 'i'
        }
    }

    if (filter.email) {
        query['email'] = {
            '$regex': util.format('.*%s.*', filter.email),
            '$options': 'i'
        }
    }

    Customer.find(query, callback).skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0).limit(perPage).sort(sort)
}

/**
 * Create Customer
 */
module.exports.createCustomer = function (newCustomer, callback) {
    newCustomer.save(function (err) {
        if (err) return callback(new Error(err))

        return callback(null, newCustomer)
    })
}

/**
 * Update Customer
 */
module.exports.updateCustomer = function (id, updateCustomer, callback) {
    Customer.findById(id, function (err, customer) {
        if (err) callback(new Error(err))
        customer.set(updateCustomer)
        customer.save(callback)
    })
}

/**
 * getCustomer Number
 */
module.exports.getLastCustomer = function (callback) {
    Customer.findOne({}, callback).sort({ _id: -1 })
}

/**
 * Delete Customer
 */
module.exports.deleteCustomer = function (id, callback) {
    Customer.findOneAndDelete({ _id: id }, callback)
  }