// import Footer from '../Footer';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='first-div'>
        <div className='home-main-title-area'>
          <div className='main-title'>
            Office supplies, so you can<br></br>
          </div>
          <div className='work-smoothly-text'>
            <img src="images/WorkSmoothlyText.png" alt="work smoothly" className='home-worksmoothly-image' width="1815" height="191" />
          </div>
          <div className='home-btn-and-image'>
            <Link to="/faq">
              <button>Shop Now</button>
            </Link>
            <div className='home-bgimage'>
              <img src="images/Sysflo_DesktopHome_bg1.png" alt="" className='home-bgimage_image' width="713" height="295" />
            </div>
          </div>
        </div>
        <div className='home-products-area'>
          <div className='products-images-row1'>
            <div className="writing-utencils-img-link">
              <Link to="/cart">
                <img src="images/WritingUtencilsButton.png" className="writing-utencils-img" alt="Writing Utencils. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
            <div className="sticky-notes-img-link">
              <Link to="/cart">
                <img src="images/StickyNotesButton.png" className="sticky-notes-lemon-img" alt="Sticky Notes. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
            <div className="elastics-img-link">
              <Link to="/cart">
                <img src="images/ElasticsButton.png" className="elastics-img" alt="Elastics. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
          </div>
          <div className='products-images-row2'>      
            <div className="paper-clips-img-link">
              <Link to="/cart">
                <img src="images/PaperClipsButton.png" className="paper-clips-img" alt="Paper Clips. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
            <div className="pins-img-link">
              <Link to="/cart">
                <img src="images/PinsButton.png" className="pins-img" alt="Pins. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
            <div className="binder-clips-img-link">
              <Link to="/cart">
                <img src="images/BinderClipsButton.png" className="binder-clips-img" alt="Binder Clips. Save up to 30% only until September 30." width="483" height="260" />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="bgFooter">
        <div className='footer-logo'>
          <Link to="/" className='logo-text1'>
            <img src="images/SysFloLogo.png" alt="SysFlo" className='sysflo-logo-image' width="184" height="46" />
          </Link>
        </div>
        <div className='footer-s-right'>
          <div className="terms">
            <Link to="/terms" className='terms-link'>
              Legal
            </Link>
          </div>
          <div className="privacy">
            <Link to="/privacy" className='privacy-link'>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};