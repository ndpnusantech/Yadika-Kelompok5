import React from 'react'
import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './testimoni.css';
import img1 from './pic-1.png';
import img2 from './pic-2.png';
import img3 from './pic-3.png';
import img4 from './pic-4.png';
import img5 from './pic-5.png';
import img6 from './pic-6.png';

export default function Testimoni() {
  return (
    <>
    <NavScroll/>
    <section class="review">

    <div class="box">
        <div class="user">
            <img src={img1} alt=""/>
            <div class="info">
                <h3>johen deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div class="box">
        <div class="user">
            <img src={img2} alt=""/>
            <div class="info">
                <h3>john deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div class="box">
        <div class="user">
            <img src={img3} alt=""/>
            <div class="info">
                <h3>john deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div class="box">
        <div class="user">
            <img src={img4} alt=""/>
            <div class="info">
                <h3>john deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div class="box">
        <div class="user">
            <img src={img5} alt=""/>
            <div class="info">
                <h3>john deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div class="box">
        <div class="user">
            <img src={img6} alt=""/>
            <div class="info">
                <h3>john deo</h3>
                <span>happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

</section>

<Lower />
      </>

  )
}
