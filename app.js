const express = require('express');
const {check, validationResult} = require("express-validator");
const app = express();
const PORT = process.env.PORT || 5000;
// Load static files
app.use(express.static("./views"));
app.use(express.urlencoded({extended:true}));

//Set ejs
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res)=>{
    const title = "Create new account";
    res.render("register", {title, errors:[]});
});
app.get("/login", (req, res)=>{
    const title = "User Login";
    res.render("login", {title});
});
app.post("/register", [
    check("name").isLength({min:3}).withMessage("Name is required & must be 3 characters long"),
    check("email").isEmail().withMessage('Email must be valid'),
    check("password").isLength({min:6}).withMessage('Password must be 6 character long')
], (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const title = "Create new account";        
        res.render("register", {title, errors:errors.array(), inputs:req.body});
    } else {        
        res.send("Form Submited");        
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running on port number: ${PORT}`);
});