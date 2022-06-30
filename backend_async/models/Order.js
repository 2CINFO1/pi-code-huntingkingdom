const mongoose = require ("mongoose")
const CartSchema = new mongoose.Schema(
{
    UserId :{type : String , required:true},
    products: [
        {
            ProductId:{
                type:String
            },
            quantity:{
                type : Number,
                default: 1,
            },
        },
    ],
    amount : { type : Number , required : true},
    address:{ type : Object , required: true},
    status : { type : String ,default: "pending"},
    
},
{timestamps: true }

);

module.exports = mongoose.model("Order",OrderSchema);