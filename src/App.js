import React from 'react';

import { Aboutme, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Blog, Possibility, Features,  } from './containers';
import { SHOP, Brand, Navbar, } from './components';
import './App.css';

const App = () => {
  return (
    <div className = "App">

      <div className = " gradient__bg">
        <Navbar />
        <Header />
        
      </div>

      <Brand />
      <Aboutme />
      <Features />
      <Possibility />
      <SHOP />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App;
