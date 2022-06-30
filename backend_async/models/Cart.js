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
},
{timestamps: true }

);

module.exports = mongoose.model("Cart",CartSchema);