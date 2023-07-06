const db = require('mongoose');

async function connectDb () {
  await db.connect(process.env.MONGO_URL);
  console.log('DB Connected');
}

module.exports = {
  connectDb
};
