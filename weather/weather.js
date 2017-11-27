const request = require('request');

var getweather = (lat,lng,callback) => {
  console.log(lat);
  console.log(lng);
  var urlAddress = `https://api.darksky.net/forecast/4cc4a3e1f6a62806afd544582e607454/${lat},${lng}`;
  request({
    url: urlAddress,
    json: true
  }, (error,response,body) => {
    if(error)
    {
     callback('unable to connect to forecast io server');
    }else if (response.statusCode === 400)
    {
      callback('unable to fetch weather');
    }else if (response.statusCode === 200)
    {
      callback(undefined,{temperature: body.currently.temperature,
                          apparentTemperature: body.currently.apparentTemperature});
    }
  });
}

module.exports.getweather = getweather;
