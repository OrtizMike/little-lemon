import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../../images/Logo.svg';
import '../../styles/components/layout/Header.css';

const Header = () => {
return (
    <header className='container'>
        <Link to='/'>
            <img src={ logo } alt='logo' className='App-logo' />
        </Link>
        <Navbar />
    </header>
    )
}

export default Header;