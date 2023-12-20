import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let lenName = 0;
app.use(bodyParser.urlencoded({ extended: true }));
function getValues(req,res,next){
  
  let firstName = req.body["fName"];
  let lastName = req.body["lName"];
 
  
  lenName = (firstName.length + lastName.length);

  console.log(lenName);
  console.log(`Your name has ${lenName} characters`);
  next();
}

app.get("/", (req, res) => {
  res.render('index.ejs')
});
app.use(getValues)
app.post("/submit", (req, res) => {
  res.render('index.ejs', {lenOfName: lenName})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
