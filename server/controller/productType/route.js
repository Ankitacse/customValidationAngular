const express = require('express')
const router = express.Router()
const jwtAuth = require('../../config/jwt-auth')

const ProductType = require('./model')
const helper = require('../../function/helper')

/**
 * @description Listing ProductType
 */
router.get('/product_type_list', jwtAuth, (req, res, next) => {
    ProductType.listProductType(req.query, (err, productTypes) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      if (!productTypes) {
        return res.status(404).json({
          msg: 'Product Type not found'
        })
      }
      return res.status(200).json(productTypes)
    })
  })

/**
 * @description Cteate new ProductType
 */
router.post('/', (req, res, next) => {
    let newProductType = new ProductType(req.body)
  
    ProductType.createProductType(newProductType, (err, productType) => {
      if (err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      return res.status(201).json(productType)
    })
})

/**
 * @description Update ProductType
 */
router.put('/update/:id', jwtAuth, (req, res, next) => {
    ProductType.updateProductType(req.params.id, req.body, (err, productType) => {
        if (err) {
          return res.status(400).json({
            msg: err.toString()
          })
        }
    
        return res.status(201).json({
            productType: productType
        })
      })
})

/**
 * @description Delete ProductType
 */
router.delete('/delete/:id',jwtAuth, (req,res)=>{
    ProductType.deleteProductType(req.params.id,(err,productType)=>{
      if(err) {
        return res.status(400).json({
          msg: err.toString()
        })
      }
  
      return res.status(201).json({
        msg: "Product Type Deleted"
      })
    })
})

module.exports = router