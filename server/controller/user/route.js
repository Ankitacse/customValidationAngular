const express = require('express')
const router = express.Router()
const jwtAuth = require('../../config/jwt-auth')
const config = require('../../config')
const jwt = require('jsonwebtoken')
const User = require('./model')
const imageUpload = require('../../function/imageUpload')


/**
 * Cteate new user
 */
router.post('/', imageUpload.singleImageUpload.single('image'), (req, res, next) => {
  let newUser = new User(req.body)

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
 * User login
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

router.post('/recovery_pin',(req,res,next)=>{
  const userName = req.body.userName
  const recoveryPIN = req.body.recoveryPIN
  
  User.getUserByuserName(userName, (err,user) =>{
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }
    
    if(!user){
      return res.status(400).json({
        msg: 'User not found'
      })
    }

    User.recoveryPIN(recoveryPIN, user.userName, (err, users)=>{
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
      
      if(users) {
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

module.exports = router
