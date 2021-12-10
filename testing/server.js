const express= require('express');
var app= express();
var fs= require('fs');
const port= 8000;
const {createUser}= require('./controller');

app.get('/', function(req, res){
    fs.readFile('./user.json', function(err,data){
       if (err){
          res.statusCode=404
        //   res.send(JSON.stringify({message:"data is not available "}))
       }
        res.statusCode= 200;
        res.end(data);
    })
})

app.post('/user', function(req,res){
       createUser(req,res) ;
    //    console.log("is working")
})
 app.listen(port,  ()=>{
    console.log(`The port is running on ${port}`)
})

module.exports=app;