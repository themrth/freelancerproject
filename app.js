const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const pageRoute = require('./router/pageRoute');
const portfolioRoute = require('./router/portfolioRoute');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.use(pageRoute);
app.use(portfolioRoute);

//MongoDB Connection
mongoose
  .connect('mongodb://localhost/freelancer-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database successfully connected');
  })
  .catch((err) => {
    console.log(err);
  });
//Local Connection
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
