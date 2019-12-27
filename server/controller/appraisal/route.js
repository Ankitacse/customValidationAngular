const express = require('express')
const router = express.Router()
const jwtAuth = require('../../config/jwt-auth')

const Appraisal = require('./model')
const helper = require('../../function/helper')

/**
 * @description Showing Appraisal Number 
 */
router.get('/get_appraisal_number', jwtAuth, (req, res) => {

  Appraisal.getLastAppraisal((err, appraisal) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (appraisal) {
      const number = appraisal.appraisalNumber.split('-')[1];
      const sum = parseInt(number) + 1;
      const appraisalNumber = "APR-" + helper.formatNumber(sum);

      return res.status(201).json({
        appraisalNumber: appraisalNumber
      })
    }

    return res.status(201).json({
      appraisalNumber: "APR-000001"
    })
  })

});

/**
 * @description Listing appraisal
 */
router.get('/appraisal_list', jwtAuth, (req, res, next) => {
    Appraisal.listAppraisal(req.query, (err, appraisals) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      if (!appraisals) {
        return res.status(404).json({
          msg: 'Appraisal not found'
        })
      }
      return res.status(200).json(appraisals)
    })
  })

/**
 * @description Cteate new appraisal
 */
router.post('/', (req, res, next) => {
    let newAppraisal = new Appraisal(req.body)
  
    Appraisal.createAppraisal(newAppraisal, (err, appraisal) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      return res.status(201).json(appraisal)
    })
  })

/**
 * @description Update Appraisal
 */
router.put('/update/:id', jwtAuth, (req, res, next) => {
  Appraisal.updateAppraisal(req.params.id, req.body, (err, appraisal) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      return res.status(201).json({
        appraisal: appraisal
      })
    })
})

/**
 * @description Delete Appraisal
 */
router.delete('/delete/:id',jwtAuth, (req,res)=>{
  Appraisal.deleteAppraisal(req.params.id,(err,appraisal)=>{
    if(err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      msg: "Appraisal Deleted"
    })
  })
})
  module.exports = router