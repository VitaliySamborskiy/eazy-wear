import React from 'react';
import './about-us.scss';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__content">
          <h2 className="about-us__title">ABOUT US</h2>
          <div className="about-us__right">
            <p className="about-us__text">
              EazyWear online store for men's clothing, offering stylish and high-quality items
              for modern men. In our range you will find hoodies, t-shirts, jeans, jackets and
              much more. We only choose trusted brands and keep up with the latest fashion
              trends to help every customer find their perfect look. Fast delivery, convenient
              selection and excellent service - all for your comfort!
            </p>
            <a href="#" className="about-us__more-link">
              More details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
