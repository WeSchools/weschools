// http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/

/* prompt> */ var mongoose = require('mongoose');

/* prompt> */ mongoose.connect('mongodb://localhost/test3');

/* prompt> */ var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updatedAt: { type: Date, default: Date.now },
});

/* prompt> */ var Todo = mongoose.model('Todo', TodoSchema);


/* prompt> */ var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

/* prompt> */ todo.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(todo);
});


// /* prompt> */ Todo.create({name: 'Master Javscript', completed: true, note: 'Getting better everyday'}, function(err, todo){
    // if(err) console.log(err);
    // else console.log(todo);
// });


/* prompt> */ Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});


/* prompt> */ var callback = function (err, data) {
  if (err) return console.error(err);
  else console.log(data);
}

// Get all completed tasks
/* prompt> */ Todo.find({completed: true }, callback);

// Get all tasks ending with `JS`
/* prompt> */ Todo.find({name: /JS$/ }, callback);
