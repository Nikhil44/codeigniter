var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type:String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type:Number,
    default:null
  }
});

var newTodo = new Todo({
  text: 'wakeup in the morning'
});

newTodo.save().then((doc) => {
  console.log('save todo',doc);
}, (e) => {
  console.log('unable to save Todo')
})

var otherTodo = new Todo ({
  text: 'go to gym',
  completed: 'true',
  completedAt: 123
})

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {
  console.log('unable to save', e);
});




//user
var User = mongoose.model('User', {
email : {
    type:String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type:Number,
    default:null
  }
});

var user = new User({
  email: 'abcd@gmail.com'
})


user.save().then((doc) => {
  console.log('user saved',doc);
},(e) => {
  console.log('unable to save', e);
});
