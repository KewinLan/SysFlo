import './FAQ.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ(props) {
  return (
    <>
      <div className='faq-title'>
        <h1>FAQ</h1>
      </div>
      <div className='faq-body'>
        <div className='faq-q1-question'>
          <h2>Do you ship worldwide?</h2>
          <div className='faq-q1-answer'>
            <p>Yes, we ship worldwide.</p>
          </div>
        </div>
        <div className='faq-q2-question'>
          <h2>Do you serve businesses?</h2>
          <div className='faq-q2-answer'>
            <p>Yes, we serve both small and large businesses. You can see more on our </p>
            <div className='faq-q2-answer-link'>
              <Link to='/forbusinesses'>
                <p>"For Businesses" </p>
              </Link>
            </div>
            <p>page.</p>
          </div>
        </div>
        <div className='faq-q3-question'>
          <h2>What does your company name mean?</h2>
          <div className='faq-q3-answer'>
            <p>The name SysFlo is a mix of the words "system" and "flow", because our office supplies allow for our customers to have a systematic way of organizing their workflow.</p>
          </div>
        </div>
        <div className='faq-btn'>
          <Link to='/'>
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <div className='faq-bg'></div>

      <div className="faq-footer">
        <div className='faq-footer-logo'>
          <Link to="/" className='faq-logo-text1'>
            <img src="images/SysFloLogo.png" alt="SysFlo" className='faq-sysflo-logo-image' width="184" height="46" />
          </Link>
        </div>
        <div className='faq-footer-s-right'>
          <div className="faq-terms">
            <Link to="/terms" className='faq-terms-link'>
              Legal
            </Link>
          </div>
          <div className="faq-privacy">
            <Link to="/privacy" className='faq-privacy-link'>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};