const router = require ("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");

const verifyTokens = (req,res,next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token , process.env.Jwt_sec,(err, user)=>{
             if (err) res.status(403).json("Token is not right");
             req.user = user;
             next();
             
        
        });
    } else {
        return res.status(401).json("you are not authenticated");
    }
};

const verifyTokenAndAuthorization = (req,res,next) => {
verifyTokens(req,res,() =>{
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
    }
    else {
        res.status(403).json("You are not alowed to do that");
    }
});

}

const verifyTokenAndAdmin = (req,res,next) => {
    verifyTokens(req,res,() =>{
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You are not alowed to do that");
        }
    });
    
    }
module.exports  = {verifyTokens,verifyTokenAndAuthorization,verifyTokenAndAdmin};
