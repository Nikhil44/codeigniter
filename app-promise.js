const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
    }
    })
.help()
.alias('help','h')
.argv;


var encodedAddress = encodeURIComponent(argv.address);
var urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(urlAddress).then( (response) => {
if (response.data.status === "ZERO_RESULTS")
    throw new Error('unable to find that address ')
  console.log(response.data);
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherurl = `https://api.darksky.net/forecast/4cc4a3e1f6a62806afd544582e607454/${lat},${lng}`;
  return axios.get(weatherurl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(temperature);
  console.log(apparentTemperature);
}).catch((e) => {
  if(e.code === 'ENOTFOUND')
  console.log('unable to connect to Api server');
  else {
    console.log(e.message);
  }
});
