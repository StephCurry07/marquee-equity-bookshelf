// Card.js
import React from 'react';
import '../styles.css'
const Book = ({ title, author, editionCount, description, onAddToBookShelf, onRemoveFromBookshelf }) => {
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
            {onAddToBookShelf && (
                <button className='btnblue' onClick={onAddToBookShelf}>Add to Bookshelf</button>
            )}
            {onRemoveFromBookshelf && (
                <button className='btnred' onClick={onRemoveFromBookshelf}>Remove from Bookshelf</button>
            )}
        </div>

    );
};

export default Book;
