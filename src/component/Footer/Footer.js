import React from 'react';
import './Footer.css';
import footer from "../../Images/Footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook, faInstagram, faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div id="#contact" className="footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-2">
              <img src={footer} alt="" />
                <h3>الوسام</h3>
                <h6>alwesam.s.d@gmail.com</h6>
                <p>شارع الامير سلطان - مبنى رومان سنتر مقابل دوار التاريخ - الدور الاول مكتب 111. </p>
                <FontAwesomeIcon className='icon' icon={faDiscord} />
                <FontAwesomeIcon className='icon' icon={faWhatsapp} />
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faInstagram} />
                <FontAwesomeIcon className='icon' icon={faFacebook} />
                <h4>Created by <span>ATHR</span></h4>
                <h5>All Rights Reservied <FontAwesomeIcon className='icons' icon={faCopyright} /> 2023</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;