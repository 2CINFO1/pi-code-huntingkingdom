const router = require ("express").Router();
const Product = require("../models/Product");
const { create } = require("../models/User");
const verifyToken = require ("./verifyToken");
const {verifyTokens,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("./verifyToken")

//create cart

router.post("/add/",verifyTokens, async (req,res) => {
   const newCart = new Cart(req.body)
   
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart);

    } catch(err){
        res.status(500).json(err)
    }
}
)
//updateProduct
router.put ("/:id",verifyTokenAndAuthorization , async (req,res) => {
               
        try {
            const updatedcart = await Cart.findByIdAndUpdate(
               req.params.id,
               {
                   $set: req.body
               },
               {new: true}
            );
            res.status(200).json(updatedcart)
            }
         catch (err) {
            res.status(500).json(err);
        }

    }
)

//DELETE car
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
       await Cart.findByIdAndDelete(req.params.id)
       res.status(200).json("Cart has been deleted ...")
    }
    catch(err){
        res.status(500).json(err)
    }
})
//GET USER Cart

router.get("/find/:userid",verifyTokenAndAuthorization,async (req,res)=>{
    try{
     const cart =  await Cart.find({userId : req.params.userId})

       res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL products

router.get("/findall/",verifyTokenAndAdmin,async (req,res)=>{
try{
const carts = await Cart.find()
res.status(200).json(carts)
}catch(err){
    res.status(500).json(err)

}

}
)


module.exports  = router