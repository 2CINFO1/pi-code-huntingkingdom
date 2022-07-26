const mongoose = require ("mongoose")

const CartSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    products: [
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
        ref: "product"
            },
            name: String,
            price: Number,
            quantity:{
                type : Number,
                default: 1,
        
            
            },
        },
    ],
    amount : {type : Number ,
    deffault : 0 }
},
{timestamps: true }

);

module.exports = mongoose.model("Cart",CartSchema);