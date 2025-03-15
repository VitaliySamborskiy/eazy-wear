import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div>
          {/* Логотип та слоган */}
          <div>
            <div>EAZYWEAR</div>
            <div>ВАШ СТІЛЬ,ВАША СВОБОДА</div>
          </div>
          
          {/* Інформація */}
          <div>
            <h3>Інформація</h3>
            <nav>
              <a href="#">Контакти</a>
              <a href="#">Про нас</a>
              <a href="#">Оплата і доставка</a>
            </nav>
          </div>
          
          {/* Соціальні мережі */}
          <div>
            <h3>Соціальні мережі</h3>
            <div>
              <a href="#">Telegram</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
