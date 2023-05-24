import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className="bgFooter">
        <div className='footer-logo'>
          <Link to="/" id='logo-text1'>
            <p>placeholder text</p>
          </Link>
        </div>
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
    </>
  );
};