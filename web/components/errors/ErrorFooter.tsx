import React from 'react';

export const ErrorFooter: React.FC = () => {
    return (
        <footer className="error-footer">
            <p>© {new Date().getFullYear()} MyWebApp. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
        </footer>
    );
};