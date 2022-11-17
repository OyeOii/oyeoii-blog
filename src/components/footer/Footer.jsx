import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiYoutube} from 'react-icons/fi';

import OyeLogo from '../../assets/oyeoii_pink_logo.PNG';
import './footer.css';


const Footer = () => (
  <div className="oyeoii__footer section__padding">

     <div className="oyeoii__footer-heading">
       <h1 className="gradient__text">NEWSLETTER</h1>
       <p>Be a part of new journey and get exclusive giveaway, and more!</p>
     </div>

     <div className = "oyeoii__footer-input">
       <input type = "name" placeholder = "Your Name Here" />
     </div>

     <div className = "oyeoii__footer-input">
       <input type = "email" placeholder = "Your Email Address" />
     </div>

     <div className="oyeoii__footer-btn">
       <p>Subscribe</p>
     </div>

     <div className="oyeoii__footer-links">
       <div className="oyeoii__footer-links_logo">
         <img src={OyeLogo} alt="oyeoii_logo" />

          <div>
            <p>OyeOii's Journey, CM 17 <br /> All Rights Reserved <br /> © 2022 </p>
          </div>
                
   </div>

       <div className="oyeoii__footer-links_div">
         <h4>Quick Links</h4>
         <p>กลุ่มอยากเรียนที่มอลต้า</p>
         <p>Cat's Instagram</p>
         <p>Request a post</p>
         <p>Q&A</p>
         <p>Work with me</p>
       </div>

       <div className="oyeoii__footer-links_div">
         <h4>Forum</h4>
         <p>Terms & Conditions </p>
         <p>Privacy Policy</p>
         <p>Contact</p>
       </div>

       <div className="oyeoii__footer-links_div">
         <h4>Get in touch</h4>
         <p>Calle Marte 17,<br /> Malaga</p>
         <p>My Porfolio</p>
         <p>pattarawarin_patt@yahoo.com</p>
       </div>

     </div>

  
    <div ClassName = "oyeoii__footer-links__icons">
      <a href = "oyeoii__footter-links__icons"><FiFacebook /></a>
      <a href = "oyeoii__footter-links__icons"><FiTwitter /></a>
      <a href = "oyeoii__footter-links__icons"><FiInstagram /></a>
      <a href = "oyeoii__footter-links__icons"><FiYoutube /></a>
      <a href = "oyeoii__footter-links__icons"><FiGithub /></a>
    </div>

     <div className = "oyeoii__footer-copyright">
        <p>© 2022 OyeOii's Journey. All rights reserved.</p>
     </div>

   </div>
);


export default Footer;