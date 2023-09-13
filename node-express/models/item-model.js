const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
	title: String,
    text: String,
    image: String,
    link: {
      text: String,
      path: String,
    }
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;