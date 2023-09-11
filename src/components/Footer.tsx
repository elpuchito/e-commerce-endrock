import React from "react";

const Footer: React.FC = () => {
  
  return (
    <footer className="footer">
      <ul className="footer__social-media">
        <li className="footer__social-media-link">
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li className="footer__social-media-link">
          <a href="https://instagram.com">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;