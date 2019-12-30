const mongoose = require('mongoose')
const util = require('util')

/**
 * ProductType Schema
 */
const ProductTypeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const ProductType = module.exports = mongoose.model('ProductType', ProductTypeSchema)

/**
 * checking ProductType Id
 */
module.exports.getProductTypeById = function (id, callback) {
    ProductType.findById(id, callback)
}

/**
 * Listing ProductType
 */
module.exports.listProductType = function (filter, callback) {
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

    if (filter.title) {
        query['title'] = {
            '$regex': util.format('.*%s.*', filter.title),
            '$options': 'i'
        }
    }

    ProductType.find(query, callback).skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0).limit(perPage).sort(sort)
}

/**
 * Create ProductType
 */
module.exports.createProductType = function (newProductType, callback) {
    newProductType.save(function (err) {
        if (err) return callback(new Error(err))

        return callback(null, newProductType)
    })
}

/**
 * Update ProductType
 */
module.exports.updateProductType = function (id, updateProductType, callback) {
    ProductType.findById(id, function (err, productType) {
        if (err) callback(new Error(err))
        productType.set(updateProductType)
        productType.save(callback)
    })
}

/**
 * Delete ProductType
 */
module.exports.deleteProductType = function (id, callback) {
    ProductType.findOneAndDelete({ _id: id }, callback)
  }