const Cart = require('../models/cart');
const verifyToken = require('./verifyToken');
const router = require('express').Router();

//Create
router.post("/",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(200).json(err)
    }
})

//Update
router.put("/:id",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete cart
router.delete("/:id",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been removedd")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get user's product
router.get("/find/:userId",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const cart = await Cart.findOne(req.params.id)
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

// //Get All 
router.get("/",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find()
    res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router