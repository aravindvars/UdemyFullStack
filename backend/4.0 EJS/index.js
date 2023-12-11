import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));
let port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

let type;
let advice

function getDay(req, res, next){
    const date = new Date();
    const dayNum = date.getDay();
    
    if (dayNum == 0 | dayNum == 6){
        type = "Weekend"
        advice = "have some fun"
    }
    else{
        
        type = "Weekday"
        advice = "time to work"
    }
    next()
}
app.use(getDay);
app.get("/", (req, res)=>{
        res.render("index.ejs", {day: type, message: advice})
  
})
