const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const messages = await controller.getMessages();
    response.success(req, res, messages);
  } catch (error) {
    response.error(req, res, 'Unexpected error', 500, e);
  }
});

router.post('/', async (req, res) => {
  try {
    const fullMessage = await controller.addMessage(req.body.user, req.body.message);
    response.success(req, res, fullMessage);
  } catch (error) {
    response.error(req, res, error.message, 400, 'Controller error');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const fullMessage = await controller.updateMessage(req.params.id, req.body.message);
    response.success(req, res, fullMessage);
  } catch (error) {
    response.error(req, res, error.message, 400, 'Controller error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const fullMessage = await controller.deleteMessage(req.params.id);
    response.success(req, res, fullMessage);
  } catch (error) {
    response.error(req, res, error.message, 400, 'Controller error');
  }
});

module.exports = router;
