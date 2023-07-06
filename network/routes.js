const messageRouter = require('../components/message/router');

const routes = (server) => {
  server.use('/message', messageRouter);
};

module.exports = routes;
