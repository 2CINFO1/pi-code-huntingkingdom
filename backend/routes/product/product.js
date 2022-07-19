const router = require ("express").Router();
const Product = require("../../models/products/Product");
const {verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("../user/verifyToken")
const multer = require('multer')
const uuid = require('uuid').v4
const path = require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const id = uuid();
        const filePath = `images/${id}${ext}`
        cb(null, filePath);
    }
})

var upload = multer({ storage })

router.post('/uploadFiles', upload.array('media'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length })
})

router.post('/uploadCoverImage/:id', (req, res, next) => {
    upload.single("file")(req, res, function(err) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, message: "Photo was updated !" });

        }
        var id = req.params.id;
        Product.findById({ _id: id }, function(err, event) {
        Product.coverImagePath = req.file.filename;
        Product.save();
        });
    });
});


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