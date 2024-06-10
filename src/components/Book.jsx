// Card.js
import React from 'react';
import '../styles/Book.css';
import '../styles/button.css'

const Book = ({ title, author, editionCount, description }) => {
    return (
        <div className="book">
            <div className="book-content">
                <h5 className="book-title">
                    {title}
                </h5>
                <p className="book-description">
                    {description}
                    <br />
                    <span className="book-author">
                        <strong>Author Name:</strong>
                        {author}
                    </span>
                    <br />
                    <span className="book-edition-count">
                        <strong>Edition Count:</strong>
                        {editionCount}
                    </span>
                </p>
              
            </div>
            <button className='btn'>
                Add to Bookshelf
            </button>
        </div>

    );
};

export default Book;
