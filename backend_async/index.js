const express = require ("express");
const app = express ();
const mongoose = require ("mongoose");
const dotenv = require ("dotenv"); 
const cartRoute = require ("./routes/cart");
const orderRoute = require ("./routes/order");
const productRoute = require ("./routes/product");
const authRoute = require ("./routes/auth");
const userRoute = require ("./routes/user");
const verifyToken = require ("./routes/verifyToken")
const reclamationRoute = require ("./routes/reclamation");
dotenv.config();
mongoose.connect(process.env.Mongo_URL)
.then (()=> console.log("db connection successfull"))
.catch((err) => {
    console.log(err);
})
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/reclamation",reclamationRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running");
});