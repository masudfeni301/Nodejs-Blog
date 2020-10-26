const mongoose = require("mongoose");

// Connect mongodb
const connection = async ()=>{
    try {
     await mongoose.connect("mongodb+srv://admin:admin@cluster0.egjbd.mongodb.net/db_node_blog?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Mongo Connected');
     } catch(err){
        console.log(err.message);
     }
}
connection();

//Define Schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type : String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
}, {timestamps:true});

// Create Model

const Users = mongoose.model("user", userSchema);

const name = "Sahil Khan";
const email = "sahil@gmail.com";
const phone = 234243242;

const newUser = new Users({
    name, email, phone
});

// newUser.save().then(user => {
//     console.log(user);
// }).catch(err =>{
//     console.log(err.message);
// });

// Users.find().then(users => {
//     console.log(users);
// }).catch(err => {
//     console.log(err);
// });

// Users.findByIdAndUpdate('5f9577d85f1ab131609bd455', {name:"Farhad Ali", email:"farhad@gmail.com"}).then(user => {
//     console.log(user);
// }).catch(err => {
//     console.log(err);
// });

// Users.findByIdAndDelete('5f9577d85f1ab131609bd455').then(user => {
//     console.log(user);
// }).catch(err => {
//     console.log(err);
// });