const User = require("../../models/user/User");
const dotenv = require("dotenv");
const router = require("express").Router();
var node_cryptojs = require('node-cryptojs-aes');
const res = require("express/lib/response");
var CryptoJS = node_cryptojs.CryptoJS;
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
        const newUser = new User({
            Email: req.body.Email,
            Password: CryptoJS.AES.encrypt(req.body.Password, process.env.Pass_sec).toString(),
        })
        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser)
        } catch (err) {
            res.status(500).json(err);
        }

    }
)
//login 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({Email: req.body.Email});
        !user && res.status(401).json("Wrong credentials")

        const HashedPassword = CryptoJS.AES.decrypt(
            user.Password,
            process.env.Pass_sec
        );
        const Originalpassword = HashedPassword.toString(CryptoJS.enc.Utf8);

        Originalpassword !== req.body.Password && res.status(401).json("Wrong credentials");

        const {Password, ...others} = user._doc;

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.Jwt_sec, {expiresIn: "3d"})

        res.status(200).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router
