const utils = require('./utils');


it('should add two number',() => {
var res = utils.add(33,11);
if(res !== 44 )
{
throw new Error('Value not correct');
}
});


it('should return square',() => {
var res = utils.square(5);
if(res !== 25 )
{
throw new Error('Value not correct');
}
});
