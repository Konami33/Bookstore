import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import AddBook from './components/AddBook';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Book Library</h1>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Book Detail Page */}
          <Route path="/books/:id" element={<Detail />} />

          {/* Add Book Page */}
          <Route path="/post" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
