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
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" name="email" placeholder="Email Address"></input>
        </div>
        <div className='contact-message'>
          <label htmlFor="email">Enter your message:</label>
          <textarea name="text" cols="40" rows="3" placeholder="Message"></textarea>
        </div>
        <div className='contact-agreement'>
          <div className='contact-checkbox'>
            <input type="checkbox" id="agree" name="agree" value="Agree"></input>
            <span className="checkmark"></span>
            <label htmlFor="agree">I have read and agreed to the </label><br></br>
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

      <div className="contact-footer">
        <div className='contact-footer-logo'>
          <Link to="/" className='contact-logo-text1'>
            <img src="images/SysFloLogo.png" alt="SysFlo" className='contact-sysflo-logo-image' width="184" height="46" />
          </Link>
        </div>
        <div className='contact-footer-s-right'>
          <div className="contact-terms">
            <Link to="/terms" className='contact-terms-link'>
              Legal
            </Link>
          </div>
          <div className="contact-privacy">
            <Link to="/privacy" className='contact-privacy-link'>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};