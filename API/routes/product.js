const Product = require('../models/product');
const verifyToken = require('./verifyToken');
const router = require('express').Router();

//Create
router.post("/",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(200).json(err)
    }
})

//Update
router.put("/:id",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete product
router.delete("/:id",verifyToken.verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been removedd")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get product
router.get("/find/:id",async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Products
router.get("/",async(req,res)=>{
    const query_New = req.query.new
    const query_Category = req.query.category
    
    try{
        let products
        
        if(query_New)
            products = await Product.find().sort({createdAt:-1}).limit(1)
        else if(query_Category){
                products = await Product.find({
                categories:{
                    $in:[query_Category],
                }
            })
        }else{
            products = await Product.find()
        }
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router