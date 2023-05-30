import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <>
    <div className='cart-everything'>
      <div className='cart-title'>
        <h1>Your Cart (6 items)</h1>
      </div>
      <div className='cart-product-names'>
        <div className='cart-product-name1'>
          <p>Writing Utencils</p>
        </div>
        <div className='cart-product-name2'>
          <p>Elastics</p>
        </div>
        <div className='cart-product-name3'>
          <p>Paper Clips</p>
        </div>
        <div className='cart-product-name4'>
          <p>Binder Clips</p>
        </div>
      </div>
      <div className='cart-product-images'>
        <button className='cart-prev-btn'>
          <img src="images/LeftChevron.png" alt="Previous" width="21" height="34" />
        </button>
        <img src="images/WritingUtencilsCart.png" alt="Writing Utencils" className='cart-product-img1' width="330" height="170" />
        <img src="images/ElasticsCart.png" alt="Elastics" className='cart-product-img2' width="330" height="170" />
        <img src="images/PaperClipsCart.png" alt="Paper Clips" className='cart-product-img3' width="330" height="170" />
        <img src="images/BinderClipsCart.png" alt="Binder Clips" className='cart-product-img4' width="330" height="170" />
        <button className='cart-next-btn'>
          <img src="images/RightChevron.png" alt="next" width="21" height="34" />
        </button>
      </div>
      <div className='cart-product-descriptions'>
        <div className='cart-product-description1'>
          <p>Description: 2 blue pens, <br></br>1 black pen, 1 pencil<br></br>Price: $11.49<br></br>Quantity: 1</p>
        </div>
        <div className='cart-product-description2'>
          <p>Description: 6 elastic <br></br>bands, various colours<br></br>Price: $1.99<br></br>Quantity: 2</p>
        </div>
        <div className='cart-product-description3'>
          <p>Description: 100 paper clips, <br></br>various colours<br></br>Price: $5.99<br></br>Quantity: 1</p>
        </div>
        <div className='cart-product-description4'>
          <p>Description: 10 binder clips, <br></br>various colours<br></br>Price: $2.99<br></br>Quantity: 2</p>
        </div>
      </div>
      <div className='cart-product-buttons'>
        <div className='cart-product-buttons1'>
          <button>Remove</button>
          <button>-</button>
          <button>+</button>
        </div>
        <div className='cart-product-buttons2'>
          <button>Remove</button>
          <button>-</button>
          <button>+</button>
        </div>
        <div className='cart-product-buttons3'>
          <button>Remove</button>
          <button>-</button>
          <button>+</button>
        </div>
        <div className='cart-product-buttons4'>
          <button>Remove</button>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
      <div className='cart-bottom'>
        <div className='cart-bottom-text'>
          <p>Subtotal: $27.44<br></br>Applicable taxes and shipping fees will be calculated at checkout.</p>
        </div>
        <div className='cart-bottom-button1'>
          <Link to="/">
            <button>Keep Shopping</button>
          </Link>
        </div>
        <div className='cart-bottom-button2'>
          <Link to="/">
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>

    
    <div className="cart-Footer">
        <div className='cart-footer-logo'>
          <Link to="/" className='cart-logo-text1'>
            <img src="images/SysFloLogo.png" alt="SysFlo" className='sysflo-logo-image' width="184" height="46" />
          </Link>
        </div>
        <div className='cart-footer-s-right'>
          <div className="cart-terms">
            <Link to="/terms" className='terms-link'>
              Legal
            </Link>
          </div>
          <div className="cart-privacy">
            <Link to="/privacy" className='privacy-link'>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};