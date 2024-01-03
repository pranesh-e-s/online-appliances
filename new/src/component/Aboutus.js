import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="about-us">
      <h2>ShopCart</h2>
      <div className="about-content">
        <section>
          <h3>Our Story:</h3>
          <p>Welcome to ShopCart! We are dedicated to providing an exceptional online shopping experience for all your needs.</p>
        </section>

        <section>
          <h3>Our Mission:</h3>
          <p>At ShopCart, our mission is to offer a wide range of high-quality products while ensuring customer satisfaction and convenience.</p>
        </section>

        <section>
          <h3>Contact Us:</h3>
          <p>If you have any queries or suggestions, feel free to contact us at [Your Contact Information]. We'd love to hear from you!</p>
          <p>Thank you for choosing ShopCart for your online shopping.</p>
        </section>
      </div>
    </div>
  );
}

export default Aboutus;
