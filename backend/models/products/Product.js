const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema(
{
    Nom:{type : String , required:false},
    Categorie: {type: Array , required:false},
    SousCategorie: {type : Array, required:false},
    Marque : {type : String ,required : false},
    img:{type : String , required : false},
    discription : {type : String,required :false},
    prix : {type: Number ,required :false},
    InStock: {type : Boolean , default : true},
    Size : {type : Array}

},
{timestamps: true }
);

module.exports = mongoose.model("product",ProductSchema);