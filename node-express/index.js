const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/mongoDb');
const Item = require('./models/item-model');


const start = async () => {
  const app = express();
  try {
    await connectDb();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors({
    origin: 'http://localhost:3000'
  }));


  app.use(bodyParser.json({ type: '*/*' }));

  app.get("/items", async (req, res) => {
    const items = await Item.find({});
    res.send(items);
  });
  app.post("/items", async (req, res) => {
      const { body: { data } } = req;
      const dbItem = new Item(data);
      await dbItem.save();
      res.send({ item: data });
  });

  app.listen(8081, () => console.log('Server started'));
};

start();
