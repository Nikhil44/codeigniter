// Jan 1st 1970 00:00:10 am


var moment = require('moment');

 var date0 = new Date();
 var months = ['Jan', 'Feb']

 console.log(date0.getMonth());


//with moment

 var date1 = moment();

 date1.add(100, 'year').subtract(9, 'months');
 console.log(date1.format('MMM Do, YYYY'));


var date2 = moment();
console.log(date2.format('h:mm a'))



var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))
