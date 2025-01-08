const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  description: { type: String, required: true },
  availableCopies: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
