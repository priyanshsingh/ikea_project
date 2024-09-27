import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/cart" className="navbar-link">Cart</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/products" className="navbar-link">Products</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/category" className="navbar-link">Category</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
