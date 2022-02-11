const User = require('../models/user');
const verifyToken = require('./verifyToken');

const router = require('express').Router();

//Update
router.put("/:id",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC).toString()
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete("/:id",verifyToken.verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User removedd")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get User
router.get("/find/:id",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All users
router.get("/allusers",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    const query = req.query.new
    try{
        const user = query? await User.find().sort({_id:-1}).limit(5):await User.find()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get user status
router.get("/stats",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    const date =new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))

    try {
        const data = await user.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},//condition ,gte:greater than
            {
                $project:{
                    month:{$month:"$createdAt"}  //assigning month
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            }
        ])
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router