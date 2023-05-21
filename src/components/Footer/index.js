import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className="bgFooter">
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