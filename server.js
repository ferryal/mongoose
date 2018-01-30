var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("we are connected");
});

let movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false
  },

  rating: {
    type: Number,
    required: true,
    default: 10
  },

  genre: {
    type: String,
    required: true,
    unique: false
  }
}, {versionKey: false});

let Movies = mongoose.model("Movie", movieSchema)

const thor = new Movies({title: "Thor Ragnarok", rating: 9, genre: "Action"})
const jumanji = new Movies({title: "Jumanji", rating: 9, genre: "Adventures"})

//save new data
thor.save((err) => {
  if (err) 
    throw err
  console.log(thor)

})
// save new data
jumanji.save((err) => {
  if (err) 
    throw err
  console.log(jumanji);
})

//update exist data
Movies.findOneAndUpdate({
  title: /Conj/
}, {
  title: "Wiro Sableng",
  rating: 9,
  genre: "Gendeng"
}, (err, Movies) => {
  if (err) 
    throw err
  console.log("Update successfully");
})

//remove existing data
Movies.findOneAndRemove({
  title: /Sho/
}, (err, Movies) => {
  if (err) 
    throw err
  console.log('Delete successfully');
})
