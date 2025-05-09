import React from "react";
import "./styles/layout.css"; // Стили для Layout (если нужны)

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="v162_2">
        <Header />

        {/* Основное содержимое страницы */}
        <main className="page-content">{children}</main>

        {/* Общий футер для всех страниц */}
        <footer>
          <section className="contacts">
            <div className="contacts-info">
              <span className="email">Email: redress@gmail.com</span>
              <span className="numbers">
                +380(66) 766-36-36 +380(50)-766-36-36 +380(95)-766-36-36
              </span>
            </div>
            <h2 className="contacts-text">КОНТАКТИ</h2>
          </section>

          <p className="text-elem1">Завантажуй прямо зараз</p>
          <p className="text-elem2">Купуй та продавай у будь-який час</p>
          <div className="download">
            <div className="download-btn"></div>
            <div className="download-img"></div>
            <span className="download-text">Завантажити додаток</span>
          </div>
          <p className="text-elem3">
            Речі за покликом серця! Усі права захищені
          </p>

          <div className="copyright">
            <div className="copyright-icon"></div>
            <span className="copyright-text">2025 REDRESS.UA</span>
          </div>

          <section className="social-media">
            <h3 className="sm-text">Ми у соц. мережах</h3>
            <div className="sm-icons">
              <div className="facebook-icon"></div>
              <div className="instagram-icon"></div>
              <div className="twitter-icon"></div>
              <div className="youtube-icon"></div>
            </div>
          </section>

          <nav className="additional-menu">
            <span className="policy">Політика конфіденційності</span>
            <span className="contract">Договір-оферта</span>
            <span className="service">Служба підтримки</span>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
