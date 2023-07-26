
const mongoose = require('mongoose');//npm i mongoose
// let secrets = require("../secrets");
let DB_LINK = process.env.DB_LINK || require("../secrets").DB_LINK;

mongoose
.connect(DB_LINK).then(function (){
    console.log("connected");
}).catch(function (err){
    console.log("error" , err);
})

const VehicleSchema = new mongoose.Schema({
    LocationId: {
        type : Number,
        required : [true , "Location can't be empty"]
    },
    VehicleNo : {
        type : String, 
        required :[true , "VehicleNo must contain Some Values"]
    },
  
    // user : {
    //     //info kiske ObjectId se humein id chaiye we will define it in  reference
    //     type : mongoose.Schema.ObjectId,//id
    //     required : [true , "Vehicle must belong to a user"],
    //     // ref:"FooduserModel"//FooduserModel -> user_id
    // },
    VehicleCategory :{
        type : String,
        enum: ["car" , "auto" , "bike"],
        required: true ,
        },
    NoOfPassenger :{
        type: Number,
        required : [true , "No of passenger must not be empty"]
    },
    Available : {
        type: String,
        enum: ["yes" , "no"],
        required: true
    },
    DriverContactNumber :{
       type: String,
       minLength : [10 , "less than 10 numbers"],
       maxLength : [10 , "less than 10 numbers"]
    }
})

const VehicleModel = mongoose.model("VehicleDB" , VehicleSchema);
module.exports = VehicleModel;