const router = require ("express").Router();
const Cart = require("../../models/products/Cart");
const {verifyTokens,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("../user/verifyToken")





router.post("/item/:id", async (req, res) => {
    const { productId, quantity, name, price } = req.body;
    const userId = req.params.id; //TODO: the logged in user id
    try {
      let cart = await Cart.findOne({ userId });
      if (cart) {
        //cart exists for user
        let itemIndex = cart.products.findIndex(p => p.productId == productId);
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
          cart.products.push({ productId, quantity, name, price });
        }
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          products: [{ productId, quantity, name, price }]
        });
        return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  });
//create cart

router.post("/add",verifyTokens, async (req,res) => {
   const newCart = new Cart(req.body)
   
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart);

    } catch(err){
        res.status(400).json(err)
    }
}
)
//updateCart
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
            res.status(400).json(err);
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
        res.status(400).json(err)
    }
})
//GET USER Cart

router.get("/find/:userid",verifyTokenAndAuthorization,async (req,res)=>{
    try{
     const cart =  await Cart.find({userId : req.params.userId})

       res.status(200).json(cart)
    }
    catch(err){
        res.status(400).json(err)
    }
})

//GET ALL carts

router.get("/findall/",verifyTokenAndAdmin,async (req,res)=>{
try{
const carts = await Cart.find()
res.status(200).json(carts)
}catch(err){
    res.status(400).json(err)

}

}
)


module.exports  = router