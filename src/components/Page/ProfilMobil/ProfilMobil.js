import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import CardSlide from '../../CardSlide';

import React, { Component } from 'react';

export default class ProfilMobil extends Component {
  render() {
    return (
      <>
        <NavScroll />
        <div className="proifl">
          <CardSlide />
          
        </div>
        <Lower />
      </>
    );
  }
}
