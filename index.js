const express=require("express");
const files=require("node:fs");
const connection=express();
const commands=require("./javascript/commands");
const code=require( "./javascript/code");
connection.engine("html", function(path, options, callback){
   
     files.readFile(path, function(error, info){
        console.log(code.code);
        return callback(null, `<html><head>${code.code}</head>${info.toString()}`);
     });
     
});
connection.set("view engine", "html");

connection.get("/", function(request, response){
   response.render("index");
});
connection.listen(4000);