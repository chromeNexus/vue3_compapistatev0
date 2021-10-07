require("dotenv").config();
const express = require("express");
const app = express();
 const port = 3000;
const cors = require("cors");
var qs = require("qs");
const axios = require("axios");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
var corsOptions = {
  origin:"http://localhost:3000",
}
app.use(cors(corsOptions))
/* const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }); */

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const weatherAPPapiKey = process.env.weatherAPPapiKey;

app.get("/", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  // https://api.openweathermap.org/data/2.5/weather?units=imperial&q=austin&appid=8c4d06d790b4841adca1e53efc47e969").then(response => {

  let query = request.query;
  query.appid = weatherAPPapiKey;
  let queryString = qs.stringify(query);
  // console.log(request.query)
  console.log(queryString);
  axios(`${apiUrl}?${queryString}`).then((res) => {
    //  console.log(response)
    // response = data sent back to client... res.data = data response from apiopen weather
    response.send(res.data);
  });
  //response.send('Hello World!!!!')
});
app.get("/rates", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  const easyPostApiKey = process.env.easypostAPIKey;
  const EasyPost = require('@easypost/api');
  let query = request.query;
  let queryString = qs.stringify(query);

  const api = new EasyPost(easyPostApiKey,{
    timeout: 120000,
    baseUrl: "https://api.easypost.com/v2/",
    useProxy: false,
   // superagentMiddleware: s => s,
   // requestMiddleware: r => r,
  }
    
    );
  const toAddress = new api.Address({
    name: "",
    street1: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
});
const fromAddress = new api.Address({
  name: "",
  street1: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  phone: "",
});
 // console.log(request.query)
 console.log(queryString);
 axios(`${apiUrl}?${queryString}`).then((res) => {
   //  console.log(response)
   // response = data sent back to client... res.data = data response from apiopen weather
   response.send(res.data);
 });
 //response.send('Hello World!!!!')
});
  /* await fromAddress.save();
    console.log(fromAddress.id); */
 
process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
/* app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 */