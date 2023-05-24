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
              <img src="images/Sysflo_DesktopHome_bg1.png" alt="" className='home-bgimage_image' width="951" height="394" />
            </div>
          </div>
        </div>
        <div className='home-products-area'>
          <div className='products-images-row1'>
            <div className="writing-utencils-img-link">
              <Link to="/cart">
                <img src="images/WritingUtencilsButton.png" className="writing-utencils-img" alt="Writing Utencils. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
            <div className="sticky-notes-img-link">
              <Link to="/cart">
                <img src="images/StickyNotesButton.png" className="sticky-notes-lemon-img" alt="Sticky Notes. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
            <div className="elastics-img-link">
              <Link to="/cart">
                <img src="images/ElasticsButton.png" className="elastics-img" alt="Elastics. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
          </div>
          <div className='products-images-row2'>      
            <div className="paper-clips-img-link">
              <Link to="/cart">
                <img src="images/PaperClipsButton.png" className="paper-clips-img" alt="Paper Clips. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
            <div className="pins-img-link">
              <Link to="/cart">
                <img src="images/PinsButton.png" className="pins-img" alt="Pins. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
            <div className="binder-clips-img-link">
              <Link to="/cart">
                <img src="images/BinderClipsButton.png" className="binder-clips-img" alt="Binder Clips. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};