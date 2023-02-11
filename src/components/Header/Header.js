import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul><Link to='/'>Main</Link>
                    <Link to='/volunteers'>Volunteers</Link>
                    <Link to='/home'>Home</Link></ul>
            </nav>
        </div>
    );
};

export default Header;