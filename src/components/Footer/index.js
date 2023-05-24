import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className="bgFooter">
        <div className='footer-within-the-lines'>
          <div className='footer-text1'>
            <p>Sign up for SysFlo offers<br></br><br></br>Enter your email to receive exclusive offers and events. You can unsubscribe at any time.</p>
          </div>
          <div className='footer-user-email-subsection'>
            <div className='footer-type-email'></div>
            <div className='footer-submit-btm'></div>
          </div>
          <div className='footer-text2'></div>
          <div className='footer-text3'>
            <p>Please refer to our</p>
            <div className="privacy-link">
              <Link to="/privacy">
                <p>Privacy Policy.</p>
              </Link>
            </div> 
          </div>
        </div>
        <div className='footer-address-section'>
          <div className='footer-address-terms-privacy'>
            <div className='footer-address-only'></div>
            <div className='footer-terms-privacy-only'></div>
          </div>
          <div className='footer-social-media'></div>
        </div>
        <div className='footer-bar'>
          <Link to="/" id='logo-text1'>
            <p>placeholder text</p>
          </Link>
        </div>

        <div id='footer-copyright'>
          <div id='footer-row'>
            <nav>
              <div id='footer-year'>
                <p>© 2023</p>
              </div>
              <Link to="/" id='logo-text1'>
                CHEW
              </Link>
              <Link to="/" id='logo-text2'>
                namic
              </Link>
              <div id='footer-reserved'>
                <p>All Rights Reserved</p>
              </div>
            </nav>
          </div>
        </div>
      


        <div className='footer-links'>
          <div className="terms-link">
            <Link to="/terms">
              Legal
            </Link>
          </div>
          <div className="privacy-link">
            <Link to="/privacy">
              Privacy
            </Link>
          </div>          
        </div>
      </div>
    </>
  );
};