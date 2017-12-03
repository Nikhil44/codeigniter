const expect = require('expect');
const utils = require('./utils');


it('should add two number',() => {
var res = utils.add(33,11);
expect(res).toBe(44);
});

it('should async add two number',(done) => {
  utils.asyncAdd(4,3, (sum) =>{
  expect(sum).toBe(7);
  done();
  });
});





it('should return square',() => {
var res = utils.square(5);
expect(res).toBe(25);
});

it('should return square',() => {
var user = {location: 'phil', age: 25};
var res = utils.setName(user, 'nikhil bang');
expect(res).toInclude({
  firstName: 'nikhil',
  lastName: 'bang'
});
});
