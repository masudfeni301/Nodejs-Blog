const mongoose = require("mongoose");
const connect = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.egjbd.mongodb.net/db_node_blog?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB Connection Created');
    } catch(err){
        console.log(err.message);
    }
}

module.exports = connect;