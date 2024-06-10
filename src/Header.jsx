import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Button clicked');
        navigate('./MyShelf');
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                My Bookshelf
            </button>
        </div>
    )
}

export default Header