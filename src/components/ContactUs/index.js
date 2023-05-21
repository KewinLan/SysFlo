import './ContactUs.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <>
      <div className='contact-title'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-email'>
        <p>Chewnamic@example.com</p>
      </div>
      <div className='contact-phone'>
        <p>555-0100</p>
      </div>
      <div className='contact-times'>
        <p>Mon to Fri<br></br>8 am to 10 pm ET<br></br><br></br>Sat and Sun<br></br>9 am to 8 pm ET</p>
      </div>
      <div className='contact-bg'></div>

      <div className='contact-btns'>
        <Link to="/">
          <div className='contact-products-btn1'>
            <button>Products</button>
          </div>
        </Link>
      </div>
    </>
  );
};