import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from './Book';

const MyShelf = () => {
    const navigate = useNavigate();

    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const handleClick = (e) => {
        console.log(e.target.value);
        navigate('/');
    };

    const removeFromBookshelf = (book) => {
        const updatedBookshelf = bookshelf.filter((b) => b.title !== book.title);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        alert(`${book.title} removed from bookshelf!`);
    };

    return (
        <div className="bookshelf">
            <button className='button' type="button" onClick={handleClick}>
                Go to Library
            </button>
            <h2>Your Bookshelf</h2>
            <div className="book-list">
                {bookshelf.map((book, idx) => (
                    <Book
                        key={idx}
                        title={book.title}
                        author={book.author_name}
                        editionCount={book.edition_count}
                        onRemoveFromBookshelf={() => removeFromBookshelf(book)}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default MyShelf;