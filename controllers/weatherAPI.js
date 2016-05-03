require('dotenv').config();

var request = require('request')

var toronto;

// var printTemperature = function(){

//   request("http://api.wunderground.com/api/" + process.env.weatherAPI_key + "/conditions/q/HA/Honolulu.json", function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     honolulu = JSON.parse(body);
//     temperature = honolulu.current_observation.temperature_string
//       // eval(locus);
//   console.log("THE CURRENT TEMPERATURE IN HONOLULU IS: " + temperature)
//   }
// })
//   request("http://api.wunderground.com/api/" + process.env.weatherAPI_key + "/conditions/q/Canada/Toronto.json", function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     toronto = JSON.parse(body);
//     var temperature = toronto.current_observation.temperature_string
//       // eval(locus);
//   console.log("THE CURRENT TEMPERATURE IN TORONTO IS: " + temperature)
//   }
// })
// }

function printTemperature(req, res, next){
 request({
   method: "GET",
   uri: "http://api.wunderground.com/api/" + process.env.weatherAPI_key + "/conditions/q/" + "Honolulu" +".json",
 }, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         var temp = JSON.parse(response.body).current_observation.temperature_string;
         console.log("This is the temperature", temp);
         } else if (error) {
         next(error);
           } else {
             var errObject = {
           message: "Unknown status code",
           status:  response.statusCode,
         }
       }
     });
  }


//in order to display the city use .current_observation.display_location.city



// function printTemperature(req, res, next){
// var baseUri = "http://api.wunderground.com/api/"
// key = process.env.weatherAPI_key
// var uri = baseUri + key;
// uri += "/" + req.query + "/conditions/q/" + ".json"

// console.log(req.query)
// }


printTemperature();
module.exports = {
printTemperature: printTemperature
}
