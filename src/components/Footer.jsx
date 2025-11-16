import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Kimhuo Chhoeurng. All rights reserved.</p>
        <p className="footer-note">
          Built with React ❤️ | Hosted on Firebase
        </p>
      </div>
    </footer>
  );
};

export default Footer;
