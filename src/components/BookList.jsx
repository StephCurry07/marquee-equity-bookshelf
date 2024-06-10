import React from 'react';
import Book from './Book';
import '../styles.css'
const BookList = ({ books, onAddToBookShelf }) => {
    return (
        <div className="book-list">
            {books.map((book, idx) => (
                <Book key={idx} title={book.title} author={book.author_name} editionCount={book.edition_count} onAddToBookShelf={() => onAddToBookShelf(book)} />
            ))}
        </div>
    );
};

export default BookList;
