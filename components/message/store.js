const Model = require('./model');

async function addMessage (message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

async function getMessages () {
  const messages = await Model.find();
  return messages;
}

async function updateTextMessage (id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  return foundMessage.save();
}

async function deleteMessage (id) {
  const deletedMessage = await Model.findByIdAndDelete(id);
  return deletedMessage;
}


module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateTextMessage,
  delete: deleteMessage
};
