const router = require ("express").Router();
const Product = require("../../models/products/Product");
const {verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("../user/verifyToken")

//create product

router.post("/add/",verifyTokenAndAdmin, async (req,res) => {
   const newProduct = new Product(req.body)
   
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct);

    } catch(err){
        res.status(500).json(err)
    }
}
)
//update Product
router.put ("/:id",verifyTokenAndAuthorization , async (req,res) => {
       
        
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
               req.params.id,
               {
                   $set: req.body
               },
               {new: true}
            );
            res.status(200).json(updatedProduct)
            }
         catch (err) {
            res.status(500).json(err);
        }

    }
)

//DELETE 
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
       await Product.findByIdAndDelete(req.params.id)
       res.status(200).json("Product has been deleted ...")
    }
    catch(err){
        res.status(500).json(err)
    }
})
//GET Product

router.get("/find/:id",async (req,res)=>{
    try{
     const product =  await Product.findById(req.params.id)

       res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL products

 

router.get("/findall/",async (req,res)=>{

    const qNew = req.query.new;

    const qCategorie = req.query.Categorie;

    const qSousCategorie =req.query.SousCategorie;

 

    try{

        let products

    if(qNew){

        products = await Product.find().sort({createdAT: -1}).limit(5)

 

    }else if (qCategorie){

       

        

        products = await Product.find({Categorie:{

            $in: [qCategorie],

        }})

    }else if (qSousCategorie){

        products = await Product.find({SousCategorie:{

            $in: [qSousCategorie],

        }})

     

    }else{

        products = await Product.find()

    }

    res.status(200).json(products)

    }

    catch(err){

        res.status(500).json(err)

    }

}

)
module.exports  = router