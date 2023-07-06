require('dotenv').config();
const express = require('express');
const http = require('http');

const {connectDb} = require('./libs/db');
const socket = require('./libs/socket');
const routes = require('./network/routes');

async function start () {
  const app = express();
  const server = http.Server(app);

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(express.static('public'));
  routes(app);

  await connectDb();
  socket.connect(server);
  
  const port = process.env.PORT || 8080;
  server.listen(port, () => {
    console.log(`App listening in port ${port}`);
  });
}

start();
