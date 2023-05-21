import './About.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <>
      <div className='about-title'>
        <h1>Gum that changes flavour as you chew</h1>
      </div>
      <div className="about-everything">
        <div className='about-body'>
          <p>Gum loses its flavour after several minutes of chewing. We want to prevent that from happening. We crafted a trademarked formula that causes the flavour to change after about 10 minutes of chewing. That ways, you can live dynamically!
          </p>
        </div>
        <div className='about-bg'></div>

        <div className='-about-btns'>
          <Link to="/custom">
            <div className='about-custom-made-btn1'>
              <button>Custom-made flavours</button>
            </div>
          </Link>
          <Link to="/">
            <div className='about-premade-btn1'>
              <button>Pre-made gum</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};