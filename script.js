const fs = require('node:fs');
const express = require('express') // here express is a function
const app = express()
app.use(function(req, res, next){
    console.log("middleware");
    next();
})
//base route
app.get('/', function(req, res){
    res.send("base response is working");
})
app.get('/profile', function(req, res){
    res.send("Response is working");
})

app.listen(3000, () => console.log("server is listening to port 3000"));//localhost: 3000