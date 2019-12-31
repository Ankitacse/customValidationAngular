const express = require('express')
const router = express.Router()
const jwtAuth = require('../../config/jwt-auth')
const config = require('../../config')
const jwt = require('jsonwebtoken')
const User = require('./model')
const imageUpload = require('../../function/imageUpload')

/**
 * @description Listing user
 */
router.get('/user_list', jwtAuth, (req, res, next) => {
  User.listUsers(req.query, (err, users) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (!users) {
      return res.status(404).json({
        msg: 'User not found'
      })
    }
    return res.status(200).json(users)
  })
})

/**
 * @description Cteate new user
 */
router.post('/', imageUpload.singleImageUpload.single('image'), (req, res, next) => {
  let newUser = new User(req.body)
  if (req.file) {
    imageUpload.resizeImage(req.file.filename);
    newUser.profileImage = req.file.filename;
  }
  
  User.createUser(newUser, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json(user)
  })
})

/**
 * @description User login
 */
router.post('/login', (req, res, next) => {
  const userName = req.body.userName
  const password = req.body.password

  User.getUserByuserName(userName, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (!user) {
      return res.status(400).json({
        msg: 'User not found'
      })
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }

      if (isMatch) {
        const token = jwt.sign({
          user: user
        }, config.SECRET_KEY, {
            expiresIn: 33868800 // 1 week
          })

        return res.status(201).json({
          token: token,
          user: user
        })
      } else {
        return res.status(400).json({
          msg: 'Wrong password'
        })
      }
    })
  })
})

/**
 * @description Recovery Pin
 */
router.post('/recovery_pin', (req, res, next) => {
  const userName = req.body.userName
  const recoveryPIN = req.body.recoveryPIN

  User.getUserByuserName(userName, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (!user) {
      return res.status(400).json({
        msg: 'User not found'
      })
    }

    User.recoveryPIN(recoveryPIN, user.userName, (err, users) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }

      if (users) {
        return res.status(201).json({
          user: user
        })
      } else {
        return res.status(400).json({
          msg: 'Wrong Recovery PIN'
        })
      }

    })
  })
})

/**
 * @description Update User
 */
router.put('/update/:id', jwtAuth, (req, res, next) => {

  User.updateUser(req.params.id, req.body, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      user: user
    })
  })
})

/**
 * @description Delete User
 */
router.delete('/delete/:id',jwtAuth, (req,res)=>{
  User.deleteUser(req.params.id,(err,user)=>{
    if(err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      msg: "User Deleted"
    })
  })
})

/**
 * @description New Password
 */
router.put('/newPassword/:id',jwtAuth , (req,res)=>{
  User.updateUser(req.params.id, req.body, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      user: user
    })
  })
})

module.exports = router
