const express = require('express');
const app = express();
const port = 1337;
// const { getRestName } = require('./sandData')

app.use(express.json())
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/restname', (req, res) => {
  res.render('restname', {rest1: 'Sam Lagrassa\'s', rest2: 'Bob\s Italian Foods', rest3: 'Eagle Deli'});
});

app.get('/restname/:param', (req, res) => {
  res.render('sand', {sand1: 'Combo Reuben', sand2: 'Imported Italian', sand3: 'Some Sandwich'});
});

// app.get('/group/:restaurants', (req, res) => {
//   res.render('group', { getRestName })
// })

app.get('/suggestion', (req, res) => {
  res.render('suggestion');
});

app.post('/suggestion', (req, res) => {
  res.render('suggestion');
  res.send('Added Suggestion');
});

// app.post('/suggestion', (req, res) => {
// res.render('suggestion')
// res.status(201).send('Added Suggestion');
// });


app.listen(port, () => {
console.log('listening on port ${port}');
});