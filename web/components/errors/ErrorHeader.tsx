import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorHeader: React.FC = () => {
    return (
        <header className="error-header">
            <Link to="/" className="home-link">
                <h1>MyWebApp</h1>
            </Link>
            <nav>
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    );
};