
import React from 'react';
import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import FaqAcor from './faqAccor';
import './faq.css'
const Faq = () => {

  return (
      <>
    <NavScroll/>
    <div className="mainCon">

    <div className="FaqContainer">
    <FaqAcor title="Apa yang harus saya periksa sebelum menyewa mobil?" content='Pastikan untuk memeriksa kondisi mobil, termasuk ketersediaan bahan bakar, kerusakan, dan segala hal yang diperlukan seperti sistem AC, kaca depan, dan lampu.' />
    <FaqAcor title='Berapa biaya sewa mobil per hari?' content='Biaya sewa mobil bervariasi tergantung pada jenis mobil, lama waktu sewa, dan wilayah penyewaan. Namun, biaya rata-rata untuk mobil ekonomi sekitar Rp600.000 - Rp1.000.000 per hari.' />
    <FaqAcor title='Apakah saya perlu membeli asuransi tambahan untuk mobil sewaan?' content='Pilihan untuk membeli asuransi tambahan biasanya tersedia saat Anda menyewa mobil. Meskipun tidak wajib, sangat disarankan untuk membeli asuransi tambahan untuk melindungi Anda dari risiko yang tidak terduga seperti kerusakan mobil atau kecelakaan.' />
    <FaqAcor title='Apakah saya perlu membayar deposit saat menyewa mobil?' content='Ya, deposit biasanya dibutuhkan saat menyewa mobil. Besarnya deposit bervariasi tergantung pada jenis mobil dan perusahaan penyewaan mobil. Deposit biasanya dibayarkan dengan kartu kredit dan akan dikembalikan setelah mobil dikembalikan dalam kondisi baik.' />
    </div>
    
    <Lower/>
    </div>
      </>
  );
};

export default Faq;

