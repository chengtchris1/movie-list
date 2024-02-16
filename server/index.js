const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = 3000 || process.env.PORT;



app.use('/',express.static('client/dist'));
app.use(morgan('dev'));

/*
app.get('/access', (req, res) => {
  res.send('Hello World!')
})*/

const router = require('./routes.js')
app.use('/access', router);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

/*
if (!module.parent) {
  app.listen(PORT);
  console.log(`Server listening on port: ${PORT}`);
}
*/