import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let bandName;
const _direname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));


function logger(req,res,next){
  console.log(`Requested method is ${req.method}`);
  console.log(`Requested URL is ${req.url}`);
  next();

}

function bandNameGenerator(req,res,next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"]
  next();
}

app.use(logger);
app.use(bandNameGenerator);


app.get("/", (req,res)=>{
  res.sendFile(_direname + "/public/index.html")
  
})

app.post("/submit", (req,res)=>{
  res.send(`<h1> Your band name is: </h1> <h4>${bandName}</h4>`)
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
