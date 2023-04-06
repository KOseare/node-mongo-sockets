const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
