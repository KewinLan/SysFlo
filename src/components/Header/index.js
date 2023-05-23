import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


export default function Header() {
  return (
    <>
      <div className="bgHeader">
        <nav>
          <div className="bgHeaderLogo">
            <Link to="/" className='logo-text1'>
              SysFlo
            </Link>
          </div>
          <div className="bgHeaderLinks">
            <div className="bgHeaderHome">
              <Link to="/">Home</Link>
            </div>

            <div className="bgHeaderFAQ">
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="bgHeader-for-businesses">
              <Link to="/forbusinesses">For Businesses</Link>
            </div>
            <div className="bgHeaderCart">
              <Link to="/cart">
                <div className="bgHeaderCartIcon">
                  <FaShoppingCart />
                </div>
                Cart
              </Link>
            </div>
            <div className="bgHeaderContact">
              <Link to="/contactus">Contact</Link>
            </div>
            <div className="bgHeaderShadow"></div>
          </div>
        </nav>
      </div>
    </>
  );
};