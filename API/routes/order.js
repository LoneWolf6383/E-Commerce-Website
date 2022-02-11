const Order = require('../models/order');
const verifyToken = require('./verifyToken');
const router = require('express').Router();

//Create
router.post("/",verifyToken,async(req,res)=>{
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(200).json(err)
    }
})

//Update
router.put("/:id",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete cart
router.delete("/:id",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been removed")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get user's Orders
router.get("/find/:userId",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const orders = await Order.find(req.params.id)
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// //Get All 
router.get("/",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try {
        const orders = await Order.find()
    res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get monthly income 
router.get("/income",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))

    try {
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount",
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                },
            },
        ])
        res.status(200).json(income)
    } catch (err) {
        
    }
})

module.exports = router