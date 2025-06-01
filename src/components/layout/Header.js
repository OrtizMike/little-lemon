import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
return (
    <div className='container'>
        <header className='content'>
            <Link to='/'>
                <img src={ logo } alt='logo' className='App-logo' />
            </Link>
            <Navbar />
        </header>
    </div>
    )
}

export default Header;