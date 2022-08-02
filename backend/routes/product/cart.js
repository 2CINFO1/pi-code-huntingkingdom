const router = require ("express").Router();
const Cart = require("../../models/products/Cart");
const Product = require("../../models/products/Product");
const {verifyTokens,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("../user/verifyToken");
const stripe = require("stripe")("sk_test_51LH13WHxNBiDGFedRzXFbgZn7pxMX6ozjjiublCBDKfz9EP0PbsIL9TWKszycdZRFUqocD8BkhgqhGLYEYGNzogA00JBfrhD3b");





router.post("/item/:id", async (req, res) => {
    const { productId, quantity, name, price , img } = req.body;
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
         
          cart.products.push({ productId, quantity, name , price, img });
          cart.amount = cart.products.map(productItem => productItem.price).reduce((acc, next) => acc + next);
            }
        
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          products: [{ productId, quantity, name, price , img}]
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
router.delete("/:id",async (req,res)=>{
  const userId = req.params.id;
    try{
    let cart =  await Cart.findOneAndDelete({userId});
       res.status(200).json("Cart has been deleted ...")
    }
    catch(err){
        res.status(400).json(err)
    }
})
//GET USER Cart
//verifyTokenAndAuthorization
router.get("/find/:id",async (req,res)=>{
  const userId = req.params.id;
  const products = [];
  let amount = 0;
    try{
    let cart =  await Cart.findOne({userId});
     if(cart){
      console.log(cart.products)

      res.status(200).json(cart.products)}
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
router.get("/findamount/:id",async (req,res)=>{
  const userId = req.params.id;
    try{
    let cart =  await Cart.findOne({userId});
     if(cart){
      console.log(cart.amount)

      res.status(200).json(cart.amount)}
     }
    catch(err){
        res.status(400).json(err)
    }
})
router.post('/checkout/:id', async(req, res) => {
  const userId = req.params.id;
  try {
    let cart =  await Cart.findOne({userId});
      console.log(req.body);
      token = req.body.token
    const customer = stripe.customers
      .create({
        email: "sghaier.muhamed@esprit.tn" ,
        source: token.id
      })
      .then((customer) => {
        console.log(customer);
        return stripe.charges.create({
          amount: cart.amount * 100,
          description: "Test Purchase using express and Node",
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge) => {
        console.log(charge);
          res.json({
            data:"success"
        })
      })
      .catch((err) => {
          res.json({
            data: "failure",
          });
      });
    return true;
  } catch (error) {
    return false;
  }
})


module.exports  = router