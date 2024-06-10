import React, { useEffect, useState } from 'react'
import Header from './Header';
import Book from './components/Book';
import Books from './api/books';

const BookLibrary = () => {
    const [bookName, setBookName] = useState("hello");

    const handleInput = async e => {
        const query = e.target.value;
        const res = await Books.get('/search.json', {
            params: {
                q: query,
                limit: 10,
                page:1
            }
        })
        console.log(res.title);
        setBookName(e.target.value);
    }

    return (
        <div>
            <Header />
            <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                Search by Book Name:
            </p>
            <input type="text" id="bookName" name="bookName" onChange={handleInput} />
            <Book title={bookName} />
        </div>
    )
}

export default BookLibrary;