import React, { useState } from 'react';
import Header from './Header';
import Books from '../api/books';
import BookList from './BookList';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInput = async (e) => {
    const query = e.target.value;
    if (!query) return;
    setLoading(true);
    try {
      const res = await Books.get('/search.json', {
        params: {
          q: query,
          limit: 10,
          page: 1,
        },
      });
      setBooks(res.data.docs);
      console.log(books);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

const addToBookShelf = (book) => {
  let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
  bookshelf.push(book);
  localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  alert(`${book.title} added to bookshelf!`);
};

return (
  <div className="book-library">
    <Header />
    <p className="search-label">
      Search by Book Name:
    </p>
    <input
      type="text"
      id="bookName"
      name="bookName"
      onChange={handleInput}
      className="search-input"
    />
    {loading ? (
      <div className="spinner"></div>
    ) : (
      <BookList books={books} onAddToBookShelf={addToBookShelf} />
    )}
  </div>
);
};

export default BookLibrary;
