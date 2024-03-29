const router = require ("express").Router();
const User = require("../../models/user/User");
const verifyToken = require ("./verifyToken");
const {verifyTokenAndAuthorization,verifyTokenAndAdmin} = require ("./verifyToken")

//updateUser
router.put ("/:id", async (req,res) => {
        if(req.body.password){
            password : CryptoJS.AES.encrypt(req.body.Password , process.env.Pass_sec).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
               req.params.id,
               {
                   $set: req.body
               },
               {new: true}
            );
            res.status(200).json(updatedUser)
            }
         catch (err) {
            res.status(400).json(err);
        }

    }
)

//DELETE 
router.delete("/:id",async (req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id)
       res.status(200).json("User has been deleted ...")
    }
    catch(err){
        res.status(400).json(err)
    }
})
//GET USER 

router.get("/find/:id",async (req,res)=>{
    try{
     const user =  await User.findById(req.params.id)
     const {Password , ...others} = user._doc ;
       res.status(200).json(user)
    }
    catch(err){
        res.status(400).json(err)
    }
})

//GET ALL USERS

router.get("/findall/",async (req,res)=>{
    try{
     const users =  await User.find();
       res.status(200).json(users)
    }
    catch(err){
        res.status(400).json(err)
    }
}
)
//GET user stats

router.get("/stats",verifyTokenAndAdmin,async (req,res)=>{
  
     const date = new Date()
     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
     try{
         const data = await User.aggregate([
         {$match : {createdAt: {$gte : lastYear}}},
            {
                $project : {
                    month : {
                        $month:"$createdAt"
                    },
                },
            },
            {$group :{
                _id:"$month",
                total: { $sum: 1},
            },
            },

        ]);
        res.status(200).json(data)
     }
    catch(err){
        res.status(400).json(err)
    }
}
)

module.exports  = router
