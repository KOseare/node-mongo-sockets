const store = require('./store');
const {socket} = require('../../libs/socket');

async function addMessage (user, message) {
  if (!user || !message) {
    console.log('[message/controller] No hay usuario o mensaje');
    throw new Error('Los datos son incorrectos');
  }

  const fullMessage = {
    user,
    message,
    date: new Date()
  };
  await store.add(fullMessage);

  socket.io.emit('message', fullMessage);

  return fullMessage;
}

async function getMessages () {
  return store.list();
}

async function updateMessage (id, message) {
  if (!id || !message) {
    console.log('[message/controller] No hay usuario o mensaje');
    throw new Error('Los datos son incorrectos');
  }

  const fullMessage = {
    id,
    message
  };
  await store.updateText(id, message);
  return fullMessage;
}

async function deleteMessage (id) {
  if (!id) {
    console.log('[message/controller] No hay usuario o mensaje');
    throw new Error('Los datos son incorrectos');
  }

  return store.delete(id);
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
