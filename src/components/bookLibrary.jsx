import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Books from '../api/books';
import BookList from './BookList';
import { debounce } from '../utils/debounce';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    const query = e.target.value;
    setQuery(query);
  }

  useEffect(() => {
    const fetchBooks = async () => {
      if (!query) return;
      try {
        const res = await Books.get('/search.json', {
          params: {
            q: query,
            limit: 10,
            page: 1,
          },
        });
        setBooks(res.data.docs);
      } catch (error) {
        alert(error.message);
      }
    };

    const debouncedFetchBooks = debounce(fetchBooks, 500);
    debouncedFetchBooks();

    return () => {
      debouncedFetchBooks.cancel();
    };
  }, [query]);

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
      <BookList books={books} onAddToBookShelf={addToBookShelf} />
    </div>
  );
};

export default BookLibrary;
