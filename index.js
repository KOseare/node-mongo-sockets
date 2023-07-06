require('dotenv').config();
const express = require('express');

const {connectDb} = require('./libs/db');
const routes = require('./network/routes');

async function start () {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  routes(app);

  await connectDb();
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`App listening in port ${port}`);
  });
}

start();
