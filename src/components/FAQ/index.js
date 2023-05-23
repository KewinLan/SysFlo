import './FAQ.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ(props) {
  return (
    <>
      <div className='faq-title'>
        <h1>Gum that changes flavour as you chew</h1>
      </div>
      <div className="faq-everything">
        <div className='faq-body'>
          <p>Gum loses its flavour after several minutes of chewing. We want to prevent that from happening. We crafted a trademarked formula that causes the flavour to change after about 10 minutes of chewing. That ways, you can live dynamically!
          </p>
        </div>
        <div className='faq-bg'></div>

        <div className='-faq-btns'>
          <Link to="/">
            <div className='faq-premade-btn1'>
              <button>Pre-made gum</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};