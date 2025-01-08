import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredBooks.map(book => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card">
              <img src={book.coverImage} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  Author: {book.author}<br />
                  Year: {book.publicationYear}<br />
                  Genre: {book.genre}<br />
                  Price: ${book.price}<br />
                  Copies: {book.availableCopies}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/books/${book.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-success mt-4"
        onClick={() => navigate('/post')}
      >
        Add Book
      </button>
    </div>
  );
};

export default Home;
