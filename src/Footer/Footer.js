import React from 'react';
import './Footer.css';

function Footer() {
    const copy = "\u00A9";
  return (
      <footer className="block-quote footer">
          <div className="container">
              <span>
                  {copy} <cite>Saoirse Bryar, 2020</cite>
              </span>
              
          </div>
      </footer>
  );
}

export default Footer;
