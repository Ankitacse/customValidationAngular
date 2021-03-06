const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const util = require('util')

// User Schema
const UserSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    unique: true,
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
  password: {
    type: String,
    required: true
  },
  recoveryPIN: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date
  }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback)
}

module.exports.getUserByuserName = function (userName, callback) {
  const query = {
    userName: userName
  }
  User.findOne(query, callback)
}

module.exports.getUserByEmail = function (email, callback) {
  const query = {
    email: email
  }
  User.findOne(query, callback)
}

module.exports.listUsers = function (filter, callback) {
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

  if (filter.userName) {
    query['userName'] = {
      '$regex': util.format('.*%s.*', filter.userName),
      '$options': 'i'
    }
  }

  if (filter.email) {
    query['email'] = {
      '$regex': util.format('.*%s.*', filter.email),
      '$options': 'i'
    }
  }


  User.find(query, callback).skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0).limit(perPage).sort(sort)
}

// Create User
module.exports.createUser = function (newUser, callback) {
  if (newUser.connected_profile_id) {
    newUser.save(function (err) {
      if (err) return callback(new Error(err))
      return callback(null, newUser)
    })
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return callback(new Error(err))
      }
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return callback(new Error(err))
        }
        newUser.password = hash
        newUser.email_activation_key = crypto.randomBytes(20).toString('hex')
        newUser.save(function (err) {
          if (err) return callback(new Error(err))

          return callback(null, newUser)
        })
      })
    })
  }
}

// Update User
module.exports.updateUser = function (id, userIdForCheck, updateUser, callback) {
  User.findById(id, function (err, user) {
    if (err) callback(new Error(err))
    if (userIdForCheck.toString() !== user._id.toString()) return callback(new Error('you can only update your own user'))
    updateUser.updatedAt = new Date()
    user.set(updateUser)
    user.save(callback)
  })
}

module.exports.comparePassword = function (password, hash, callback) {
  bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) {
      throw err
    }

    callback(null, isMatch)
  })
}