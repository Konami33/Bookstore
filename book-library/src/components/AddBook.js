import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    description: '',
    availableCopies: '',
    price: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/books', book)
      .then(() => {
        alert('Book added successfully');
        navigate('/');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Publication Year</label>
        <input
          type="number"
          className="form-control"
          name="publicationYear"
          value={book.publicationYear}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={book.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Available Copies</label>
        <input
          type="number"
          className="form-control"
          name="availableCopies"
          value={book.availableCopies}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={book.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Book</button>
    </form>
  );
};

export default AddBook;

