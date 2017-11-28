const request = require('request');

var geocodeAddress = (address) =>
{
  return new Promise ((resolve,reject) => {
    var encodedAddress = encodeURIComponent(address);
    var urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    request({
      url: urlAddress,
      json: true
    },(error,response,body) => {
      if(error)
        reject('unable to connect to google server');
      else if (body.status == 'ZERO_RESULTS')
        reject('Unable to find that address');
      else if (body.status === 'OK'){
        resolve({
        address: body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        logitude:body.results[0].geometry.location.lng
      });
    }
    });
  });
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location,undefined,3));
},(errorMessage) =>
{
  console.log(errorMessage);
});
