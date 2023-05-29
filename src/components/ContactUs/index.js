import './ContactUs.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <>
      <div className='contact-title'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-form'>
        <div className='contact-email'>
          .
        </div>
        <div className='contact-message'>
        </div>
        <div className='contact-agreement'>
          <div className='contact-checkbox'>
          </div>
          <div className='contact-checkbox-text'>
            <p>I have read and agreed to the </p>
          </div>
          <div className='contact-checkbox-privacy'>
            <Link to="/privacy" className='contact-checkbox-privacy-link'>
              <p>Privacy Policy.</p>
            </Link>
          </div>
        </div>
        <div className='contact-disclaimer'>
          <p>I understand that I can unsubscribe from electronic communications from SysFlo at any time by using the contact information below or by clicking the unsubscribe link in an electronic communication.</p>
        </div>
        <div className='contact-address'>
          <p>SysFlo, 123 Some Street, Toronto, ON, Canada</p>
        </div>
        <div className='contact-submit'>
          <button>
            <p>Submit</p>
          </button>
        </div>
      </div>
      <div className='contact-bg'></div>
    </>
  );
};