const mongoose = require ("mongoose")
const UserSchema = new mongoose.Schema(
{
    Nom:{type : String , required:false},
    Prenom: {type: String , required:false},
    Age: {type : Number, },
    type : {type : Array , default : 'visiteur'},
    img:{type : String , required : false},
    Bio : {type : String,required :false},
    Email :  {type : String,required :true},
    Password :  {type : String,required :true},
    isAdmin : {type: Boolean ,default : false},
    LicenceImg : {type : String , required : false},
    isValidated : {type: Boolean ,default : false},
    // ProductsAcheter : [
    //     {
    //         ProductId:{
    //             type:String
    //         },

    //     },
    // ],

},
// {timestamps: true }
);

module.exports = mongoose.model("User",UserSchema);