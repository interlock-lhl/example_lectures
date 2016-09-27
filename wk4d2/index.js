const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api', require('./routes/surveys'));
app.use('/api', require('./routes/questions'));
app.use('/api', require('./routes/question_options'));
app.use('/api', require('./routes/submissions'));
app.use('/api', require('./routes/submission_answers'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
