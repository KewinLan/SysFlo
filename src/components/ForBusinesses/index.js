import './ForBusinesses.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForBusinesses(props) {
  return (
    <>
      <div className='forbusinesses-title'>
        <h1>For Businesses</h1>
      </div>
      <div className="forbusinesses-everything">
        <div className='forbusinesses-body'>
          <div className='forbusinesses-small-busi'>
            <Link to='/faq'>
              <img src="images/small_busi_image.png" alt="person writing on clipboard, computer off to the side" className='forbusinesses-small-busi-img' width="709" height="360" />
              <h2>Small Businesses</h2>
              <p>Best for small businesses.</p>
            </Link>
          </div>
          <div className='forbusinesses-large-busi'>
            <Link to='/contact'>
              <img src="images/large_busi_image.png" alt="conference room" className='forbusinesses-large-busi-img' width="709" height="360" />
              <h2>Large Businesses</h2>
              <p>Best for medium to large businesses & goverments with expert advice.</p>
            </Link>
          </div>




        </div>
      </div>

      <div className="forbusinesses-footer">
        <div className='forbusinesses-footer-logo'>
          <Link to="/" className='forbusinesses-logo-text1'>
            <img src="images/SysFloLogo.png" alt="SysFlo" className='forbusinesses-sysflo-logo-image' width="184" height="46" />
          </Link>
        </div>
        <div className='forbusinesses-footer-s-right'>
          <div className="forbusinesses-terms">
            <Link to="/terms" className='forbusinesses-terms-link'>
              Legal
            </Link>
          </div>
          <div className="forbusinesses-privacy">
            <Link to="/privacy" className='forbusinesses-privacy-link'>
              Privacy
            </Link>
          </div>
        </div>
      </div>
        
    </>
  );
};