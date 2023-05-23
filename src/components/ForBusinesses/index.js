import './ForBusinesses.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForBusinesses(props) {
  return (
    <>
        <div className='for-businesses-title'>
          <h1>forbusinesses Order</h1>
        </div>
      <div className="for-businesses-everything">
        <div className='for-businesses-body'>


          <div className='for-businesses-fieldsets'>
            <fieldset className='flavour1-fieldset'>
              <legend>Flavour 1</legend>

              <div>
                <input type="radio" id="banana" name="flavour1" value="banana" />
                <label htmlFor="banana">Banana</label>
              </div>

              <div>
                <input type="radio" id="cherry" name="flavour1" value="cherry" />
                <label htmlFor="cherry">Cherry</label>
              </div>

              <div>
                <input type="radio" id="peppermint" name="flavour1" value="peppermint" />
                <label htmlFor="peppermint">Peppermint</label>
              </div>

              <div>
                <input type="radio" id="lemon" name="flavour1" value="lemon" />
                <label htmlFor="lemon">Lemon</label>
              </div>

              <div>
                <input type="radio" id="raspberry" name="flavour1" value="raspberry" />
                <label htmlFor="raspberry">Raspberry</label>
              </div>
            </fieldset>

            <fieldset className='flavour2-fieldset'>
              <legend>Flavour 2</legend>

              <div>
                <input type="radio" id="banana" name="flavour2" value="banana" />
                <label htmlFor="banana">Banana</label>
              </div>

              <div>
                <input type="radio" id="cherry" name="flavour2" value="cherry" />
                <label htmlFor="cherry">Cherry</label>
              </div>

              <div>
                <input type="radio" id="peppermint" name="flavour2" value="peppermint" />
                <label htmlFor="peppermint">Peppermint</label>
              </div>

              <div>
                <input type="radio" id="lemon" name="flavour2" value="lemon" />
                <label htmlFor="lemon">Lemon</label>
              </div>

              <div>
                <input type="radio" id="raspberry" name="flavour2" value="raspberry" />
                <label htmlFor="raspberry">Raspberry</label>
              </div>
            </fieldset>
          </div>

          <div className='for-businesses-explanation'>
            <p>After about 10 minutes of chewing, your gum will change flavour from flavour 1 to flavour 2.</p>
          </div>




        </div>

        <div className='for-businesses-bg'></div>

        </div>
        <div className='for-businesses-btns'>
          <Link to="/cart">
            <div className='for-businesses-add-to-cart-btn1'>
              <button>Add to cart</button>
            </div>
          </Link>
          <Link to="/">
            <div className='for-businesses-premade-btn1'>
              <button>Pre-made gum</button>
            </div>
          </Link>
        </div>
    </>
  );
};