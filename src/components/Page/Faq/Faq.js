
import React, { useState } from 'react';
import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './faq.css'
const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Apa yang harus saya periksa sebelum menyewa mobil?',
      answer: 'Pastikan untuk memeriksa kondisi mobil, termasuk ketersediaan bahan bakar, kerusakan, dan segala hal yang diperlukan seperti sistem AC, kaca depan, dan lampu.'
    },
    {
      question: 'Berapa biaya sewa mobil per hari?',
      answer: 'Biaya sewa mobil bervariasi tergantung pada jenis mobil, lama waktu sewa, dan wilayah penyewaan. Namun, biaya rata-rata untuk mobil ekonomi sekitar Rp600.000 - Rp1.000.000 per hari.'
    },
    {
      question: 'Apakah saya perlu membeli asuransi tambahan untuk mobil sewaan?',
      answer: 'Pilihan untuk membeli asuransi tambahan biasanya tersedia saat Anda menyewa mobil. Meskipun tidak wajib, sangat disarankan untuk membeli asuransi tambahan untuk melindungi Anda dari risiko yang tidak terduga seperti kerusakan mobil atau kecelakaan.'
    },{
      question:'Apakah saya perlu membayar deposit saat menyewa mobil?',
      answer:'Ya, deposit biasanya dibutuhkan saat menyewa mobil. Besarnya deposit bervariasi tergantung pada jenis mobil dan perusahaan penyewaan mobil. Deposit biasanya dibayarkan dengan kartu kredit dan akan dikembalikan setelah mobil dikembalikan dalam kondisi baik.'
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
     <div className='judul'> <h1 style={{fontSize:'50px',color:'black'}}>FAQ</h1> </div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>
           <div className='quesion' style={{backgroundColor:'gray',padding:'10px',borderRadius:'5px'}}> <h2>{faq.question}</h2></div>
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

