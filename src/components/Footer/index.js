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
          <div className='footer-email'>
            <div className='footer-email-type'>
              <label for="email">Enter your email:</label>
              <input type="email" id="email" name="email" placeholder="Email address"></input>
            </div>
            <div className='footer-email-submit'>
              <input type="submit" value="Submit"></input>
            </div>
          </div>
          <div className='footer-text2'>
            <p>By submitting your information, you agree to receive promotional emails from SysFlo.<br></br>
            Please refer to our</p>
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
            <div className='footer-terms-privacy-only'>
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
          <div className='footer-social-media'></div>
        </div>
        <div className='footer-bar'>
          <Link to="/" id='logo-text1'>
            <p>placeholder text</p>
          </Link>
        </div>
      </div>
    </>
  );
};