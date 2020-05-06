var mongoose = require('mongoose');

const dbstr = 'mongodb+srv://tomio2:98819881@cluster0-lcupc.mongodb.net/test';
// const dbstr = 'mongodb://192.168.0.36:27017/test';

var db;
mongoose.connect(dbstr)
  .then(() => {
    console.log('Connected to MongoDB');
    db = mongoose.connection;
    db.useDb('test');
    console.log('Connected to test');
    var kittySchema = new mongoose.Schema({
      name: String
    });

    var Kitten = mongoose.model('Kitten', kittySchema);

    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'
    silence.save();
  });

//   var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });


// db.useDb('test')

// var kittySchema = new mongoose.Schema({
//   name: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// silence.save();