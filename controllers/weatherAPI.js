require('dotenv').config();

var request = require('request')

var toronto;

var printTemperature = function(){

  request("http://api.wunderground.com/api/" + process.env.weatherAPI_key + "/conditions/q/HA/Honolulu.json", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    honolulu = JSON.parse(body);
    temperature = honolulu.current_observation.temperature_string
      // eval(locus);
  console.log("THE CURRENT TEMPERATURE IN HONOLULU IS: " + temperature)
  }
})
  request("http://api.wunderground.com/api/" + process.env.weatherAPI_key + "/conditions/q/Canada/Toronto.json", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    toronto = JSON.parse(body);
    var temperature = toronto.current_observation.temperature_string
      // eval(locus);
  console.log("THE CURRENT TEMPERATURE IN TORONTO IS: " + temperature)
  }
})
}

printTemperature();
module.exports = {
printTemperature: printTemperature
}
