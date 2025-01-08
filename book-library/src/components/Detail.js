import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        alert('Book deleted successfully');
        navigate('/');
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>
        Author: {book.author}<br />
        Year: {book.publicationYear}<br />
        Genre: {book.genre}<br />
        Price: ${book.price}<br />
        Copies: {book.availableCopies}
      </p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete Book</button>
    </div>
  );
};

export default Detail;

