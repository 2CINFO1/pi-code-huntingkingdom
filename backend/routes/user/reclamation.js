const router = require ("express").Router();
const Reclamation = require("../../models/user/Reclamation");
const { create } = require("../../models/user/User");
const verifyToken = require ("./verifyToken");
const {verifyTokens,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("./verifyToken")

//create Reclamation

router.post("/add/",verifyTokens, async (req,res) => {
   const newReclamation = new Reclamation(req.body)
   
    try {
        const savedReclamation = await newReclamation.save()
        res.status(200).json(savedReclamation);

    } catch(err){
        res.status(500).json(err)
    }
}
)


//DELETE 
router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
       await Reclamation.findByIdAndDelete(req.params.id)
       res.status(200).json("Reclamation vient d'etre supprimée")
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports  = router