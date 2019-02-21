// Workflow:
// Install express via de terminal, link uw express via de 2 variabelen hieronder, en laat het luisteren via de app.listen hieronder.
// That's it bwoy


var express = require("express");
var app = express();

// "/" => "Hi there!"



app.get("/", function(req,res){
  res.send("hi there!");

});

app.listen(process.env.port ||4000, function(){
    console.log('listen to the signs');
    });

//app "/bye" => goodbye
app.get("/bye", function(req, res){
    res.send('goodbye insecurity')
});

app.get("/dog", function(req, res){
    console.log("someone made a request")
    res.send('Woef woef twee vier')
});

app.get("/twee", function(req, res){
    res.send ('ayoooooo');
});

app.get("*", function(req,res){
    res.send("Shine like a star")
})