import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo-block">
            <div className="footer__logo">EAZYWEAR</div>
            <div className="footer__slogan">ВАШ СТІЛЬ,ВАША СВОБОДА</div>
          </div>
          
          <div className="footer__info">
            <h3 className="footer__heading">Інформація</h3>
            <nav className="footer__nav">
              <a href="#" className="footer__link">Контакти</a>
              <a href="#" className="footer__link">Про нас</a>
              <a href="#" className="footer__link">Оплата і доставка</a>
            </nav>
          </div>
          
          <div className="footer__social">
            <h3 className="footer__heading">Соціальні мережі</h3>
            <div className="footer__social-links">
              <a href="#" className="footer__link">Telegram</a>
              <a href="#" className="footer__link">Facebook</a>
              <a href="#" className="footer__link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
