import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>React<span>Website</span></h2>
            <p>Debian環境で動作する最新のReactウェブサイトです。高性能で使いやすいウェブ体験を提供します。</p>
          </div>
          
          <div className="footer-section links">
            <h3>リンク</h3>
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/about">会社概要</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3>お問い合わせ</h3>
            <p><i className="icon-location"></i> 千葉県習志野市津田沼7-1-17</p>
            <p><i className="icon-phone"></i> 080-3512-2557</p>
            <p><i className="icon-mail"></i> shinya.323.asahi@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ReactWebsite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

