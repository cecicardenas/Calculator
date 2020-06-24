//shint esversion:6
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use("/css", express.static(__dirname + '/css'));


app.get("/css/style", function(request, response){
  response.sendFile(__dirname + "/css/style.css");
});

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;
  var sub = num1 - num2;
  var mul = num1 * num2;
  var div = num1 / num2;

  res.send("Sum = " + sum + " Substract = " + sub + " Multiplication = " + mul + " Division = " + div);
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
