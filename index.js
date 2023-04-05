const express = require("express");
const app = express();
// import cors
const cors = require("cors");

app.listen(4000);
app.use(express.json());

//to take care of errors like this
//from front end app
//Cross-Origin Request Blocked: 
//The Same Origin Policy disallows reading the remote resource at https://bfsdfbackendapril4th2023.vercel.app/hellojson.
// (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.      
app.use(cors());      

app.use((req, res, next) => {
   console.log(req.method + ":" + req.url + "\n");
   next();
});


app.get("/hello", (req, res) => {
   res.send("Hello World");
});

//simple get with return json object
app.get("/hellojson", (req, res) => {
   res.json({ 
      message: "Hello World",
      name: "Monkey",
      age: 20,


    });
});

app.post("/returnestimate", (req, res) => {

   console.log(req.body);

   let courseObjects = returnStandardValues();

   let everyweektutor = req.body.everyweektutor;
   let everyweekpractice = req.body.everyweekpractice;

   //convert value to integer
   everyweektutor = parseInt(everyweektutor);
   everyweekpractice = parseInt(everyweekpractice);

   let totaleachweek = everyweekpractice + everyweektutor;

   console.log(totaleachweek + " hours");

   let totalweeks = courseObjects.totalhours / totaleachweek;

   console.log(totalweeks + " weeks");

   let totalmonths = totalweeks / 4;

   console.log(totalmonths + " months");

   //round to whole number
   totalmonths = Math.round(totalmonths);

   let simplesummarysentence = "It will take " + totalmonths + " months to complete the course" + " with " + everyweekpractice + " hours of practice and " + everyweektutor + " hours of tutoring each week";



   let learningestimationObject = {
      totalmonths: totalmonths,
      totalweeks: totalweeks,
      totaleachweek: totaleachweek,
      everyweekpractice: everyweekpractice,
      everyweektutor: everyweektutor,
      courseObjects: courseObjects,
      simplesummarysentence: simplesummarysentence

   }

   console.log(learningestimationObject);

   res.json(learningestimationObject);
});

function returnStandardValues() 
{

   //console log entering function
   console.log("Entering returnStandardValues");

   let numberofweeks = 4;
   let standardcoursemonths = 5;
   let standardcourseweeks = standardcoursemonths * numberofweeks;
   let standardperweekhours = 4;
   let standardcourseduration = standardcourseweeks * standardperweekhours;

   console.log(standardcourseduration + " hours");

   let practiceMultiplier = 3;
   let standardcoursedurationwithpractice = standardcourseduration * practiceMultiplier;

   console.log(standardcoursedurationwithpractice + " hours");

   let preparationhours = 10;
   let javascripthours = 40;
   let cloudandothers = 10;

   let totalhours = standardcoursedurationwithpractice + preparationhours + javascripthours + cloudandothers + standardcourseduration;

   console.log(totalhours + " hours");

   let courseObjects = {
      standardcourseduration: standardcourseduration,
      standardcoursedurationwithpractice: standardcoursedurationwithpractice,
      preparationhours: preparationhours,
      javascripthours: javascripthours,
      cloudandothers: cloudandothers,
      totalhours: totalhours

   }

   console.log(courseObjects);

   return courseObjects;
}

