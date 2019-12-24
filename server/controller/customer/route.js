const express = require('express')
const router = express.Router()
const jwtAuth = require('../../config/jwt-auth')

const Customer = require('./model')
const helper = require('../../function/helper')

/**
 * @description Showing Customer Number 
 */
router.get('/get_customer_number', jwtAuth, (req, res) => {

  Customer.getLastCustomer((err, customer) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (customer) {
      const number = customer.customerNumber.split('-')[1];
      const sum = parseInt(number) + 1;
      const customerNumber = "CUS-" + helper.formatNumber(sum);

      return res.status(201).json({
        customerNumber: customerNumber
      })
    }

    return res.status(201).json({
      customerNumber: "CUS-000001"
    })
  })

});


/**
 * @description Listing customer
 */
router.get('/customer_list', jwtAuth, (req, res, next) => {
  Customer.listCustomer(req.query, (err, customers) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    if (!customers) {
      return res.status(404).json({
        msg: 'Customer not found'
      })
    }
    return res.status(200).json(customers)
  })
})

/**
 * @description Cteate new customer
 */
router.post('/', (req, res, next) => {
  let newCustomer = new Customer(req.body)

  Customer.createCustomer(newCustomer, (err, user) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json(user)
  })
})

/**
 * @description Update Customer
 */
router.put('/update/:id', jwtAuth, (req, res, next) => {

  Customer.updateCustomer(req.params.id, req.body, (err, customer) => {
    if (err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      customer: customer
    })
  })
})

/**
 * @description Delete Customer
 */
router.delete('/delete/:id',jwtAuth, (req,res)=>{
  Customer.deleteCustomer(req.params.id,(err,customer)=>{
    if(err) {
      return res.status(400).json({
        msg: err.toString()
      })
    }

    return res.status(201).json({
      msg: "Customer Deleted"
    })
  })
})

module.exports = router