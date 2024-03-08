const express = require("express");
const bodyParser = require("body-parser");

userLoggedIn = true;
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.render("login.ejs")
})

app.get("/signup", (req, res)=>{
    res.render("login.ejs", {userLogged: userLoggedIn});
})
app.listen(port, ()=>{
    console.log("server lstening to port "+ port);
})