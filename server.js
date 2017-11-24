const express = require('express');
const mongoose = require('mongoose');
const faker = require('faker');

const cats = require('./routes/cat');
const articles = require('./routes/article');
const nouns = require('./routes/noun');
const questions = require('./routes/question');
const quotes = require('./routes/quote');
const terms = require('./routes/term');
const users = require('./routes/user');
const authors = require('./routes/author');


mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
});

mongoose.connection.on('disconnected', () => {
    console.log('connection disconnected');
});

const app = express();

const port = 8090;

// app.use(express.static('build'));

app.use('/api/cats', cats);
app.use('/api/articles', articles);
app.use('/api/nouns', nouns);
app.use('/api/questions', questions);
app.use('/api/quotes', quotes);
app.use('/api/authors', authors);
app.use('/api/terms', terms);
app.use('/api/users', users);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
