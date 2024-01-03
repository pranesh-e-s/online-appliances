import React from 'react';
import './privacy.css';

function Privacy()  {
  return (
    <div className="privacy-policy">
      <h2>Online Appliances</h2>
      <div className="policy-content">
        <section>
          <h3>Information Collection and Use:</h3>
          <p>We collect personal information to provide our services, including names, contact details, payment information, product preferences, etc.</p>
        </section>

        <section>
          <h3>Use of Information:</h3>
          <p>The information collected is used to process orders, improve our product offerings, communicate with users about their orders, and provide personalized services.</p>
        </section>
        <section>
          <h3>Contact Us:</h3>
          <p>If you have any questions or concerns about our policies, please contact us at [Your Contact Information].</p>
          <p>By using our Online Appliances service, you agree to the terms outlined in this Privacy Policy.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
