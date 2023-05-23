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
        <div className='home-products-area-top'>
          <div className='gum-images-row1'>
            <div className="writing-utencils-img-link">
              <Link to="/faq">
                <img src="images/WritingUtencilsButton.png" className="banana-cherry-img" alt="Writing Utencils. Save up to 30% only until September 30." width="596" height="321" />
              </Link>
            </div>
            <div className="peppermint-lemon-img-link">
              <img src="images/Pepperm_to_Lemon1.png" className="peppermint-lemon-img" alt="Apple Strawberry Bottle" width="596" height="321" />
            </div>
            <div className="raspberry-peppermint-img-link">
              <img src="images/Rasp_to_Pepperm1.png" className="raspberry-peppermint-img" alt="Mango Strawberry Bottle" width="596" height="321" />
            </div>
          </div>
          <div className='names-of-gum-row1'>
            <div className='banana-cherry-label'>
              Banana to Cherry
            </div>
            <div className='peppermint-lemon-label'>
              Peppermint to Lemon
            </div>
            <div className='raspberry-peppermint-label'>
              Raspberry to Peppermint
            </div>
          </div>
          <div className='home-explore-btns1'>
            <div className='home-explore-btn1'>
              <button>Explore</button>
            </div>
            <div className='home-explore-btn2'>
              <button>Explore</button>
            </div>
            <div className='home-explore-btn3'>
              <button>Explore</button>
            </div>
          </div>
          

          <div className='home-bg'></div>
          <div className='gum-images-row2'>      
            <div className="cherry-lemon-img-link">
              <img src="images/Cherry_to_Lemon1.png" className="cherry-lemon-img" alt="Apple Grape Bottle" width="596" height="321" />
            </div>
            <div className="banana-peppermint-img-link">
              <img src="images/Banana_to_Pepperm1.png" className="banana-peppermint-img" alt="Grape Strawberry Bottle" width="596" height="321" />
            </div>
            <div className="peppermint-cherry-img-link">
              <img src="images/Pepperm_to_Cherry1.png" className="peppermint-cherry-img" alt="Grape Strawberry Bottle" width="596" height="321" />
            </div>
          </div>
          <div className='names-of-gum-row2'>
            <div className='cherry-lemon-label'>
              Cherry to Lemon
            </div>
            <div className='banana-peppermint-label'>
              Banana to Peppermint
            </div>
            <div className='peppermint-cherry-label'>
              Peppermint to Cherry
            </div>
          </div>
        

          <div className='home-explore-btns2'>
            <div className='home-explore-btn4'>
              <button>Explore</button>
            </div>
            <div className='home-explore-btn5'>
              <button>Explore</button>
            </div>
            <div className='home-explore-btn6'>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};