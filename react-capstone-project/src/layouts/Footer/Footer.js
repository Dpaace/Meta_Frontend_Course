import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title">PAGES</p>
          <p className="footer-item"> Home</p>
          <p className="footer-item"> About</p>
          <p className="footer-item"> Contact</p>
          <p className="footer-item"> little.lemon@mail.com</p>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> 123 Lemon Lane</p>
          <p className="footer-item"> 123-456-7890</p>
          <p className="footer-item"> little.lemon@mail.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
