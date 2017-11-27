console.log('starting app');

setTimeout(() => {
  console.log("inside of call back");
},2000);

setTimeout(() =>{
  console.log("inside second time out");
},0);

var add = (a,b) => {
  var total = a+b;
  return total;
}

var res = add(3,8);
console.log(res);
console.log('finshing app');
