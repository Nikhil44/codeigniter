const request = require('request');
var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);
  var urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
  request({
    url: urlAddress,
    json: true
  },(error,response,body) => {
    if(error)
      callback('unable to connect to google server');
    else if (body.status == 'ZERO_RESULTS')
      callback('Unable to find that address');
    else if (body.status === 'OK'){
      callback(undefined,{
      address: body.results[0].formatted_address,
      latitude:body.results[0].geometry.location.lat,
      logitude:body.results[0].geometry.location.lng
    });
  }
  });
};
module.exports.geocodeAddress = geocodeAddress;
