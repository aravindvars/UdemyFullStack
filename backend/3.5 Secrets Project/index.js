//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from "path"
import { fileURLToPath } from "url";
import { clear } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
let pass ;


function getValue(req,res,next){
    let userAuthorised = false;
    pass = req.body['password']
    console.log(pass);
    if (pass === 'ILove'){
        userAuthorised = true;
    }
    console.log(userAuthorised);
    next()
}

app.use(getValue)

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/public/index.html")
    
})


app.post("/check", (req,res) =>{
    if(userAuthorised){
        console.log("Password correct");
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        console.log("Bad password");
        res.sendFile(__dirname + "/public/index.html")
    }
    
})




app.listen(port, ()=>{
    console.log(`Listening on port ${3000}`);
})

