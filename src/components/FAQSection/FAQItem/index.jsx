import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div className={`faq-item ${isActive ? 'faq-active' : ''}`}>
      <h3 onClick={toggleFAQ}>
        {question}
        <i className={`faq-toggle bi ${isActive ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
      </h3>
      <div className="faq-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;
