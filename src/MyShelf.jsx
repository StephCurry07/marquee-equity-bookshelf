import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyShelf = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log(e.target.value);
        navigate('/');
    };
    return (
        <div>
            <button type="button" onClick={handleClick}>
                Go to Library
            </button>
        </div>
    )
}

export default MyShelf;