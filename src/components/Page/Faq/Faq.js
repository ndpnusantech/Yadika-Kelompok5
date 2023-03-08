
import React, { useState } from 'react';
import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './faq.css'
const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Why i cant buy car here?',
      answer: 'Were here just for homework, anything include this reference and not accesibility were sorry.'
    },
    {
      question: 'no country selection, is there not available worldwide?',
      answer: 'Yes, anything related here just for Indonesia only, we will get updated soon as possible'
    },
    {
      question: 'Why i cant buy car? just rental',
      answer: 'Sorry for the incovience, were here for borrow car only. All the car selling are probihited due to brand ambassador'
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <>
    <NavScroll/>
    <div className='FaqContainer'>
     <div className='judul'> <h1>FAQ</h1> </div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>
           <div className='quesion'> <h2>{faq.question}</h2></div>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
    <Lower/>
      </>
  );
};

export default Faq;

