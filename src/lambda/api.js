// DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/default', { useNewUrlParser: true });

const express = require("express");
const cors = require('cors')

// var path = require('path');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String},
  initials: {type: String, required: true},
  score: {type: Number, required: true},
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

router.get('/ping', (req, res) => {
  res.send('pong!');
});

router.get('/', (req, res) => {
  res.send('try /user/leaderboard');
});

// Get users record
router.get('/user/leaderboard', (req,res) => {
  User.find()
    .then( users => res.send(users))
    .catch( err => {
      res.send(err); 
    }); 
});

// Create User
router.post('/user/create', (req, res) => {
  return User.create(req.body)
    .then(user => res.send(user))
    .catch(err => res.send(err));
});

// Model routes
app.use(`/.netlify/functions/api`, router);


module.exports = app;

module.exports.handler = serverless(app);