import React from 'react';
import AuthDetails from '../auth/AuthDetails/AuthDetails';
import './Cart.scss';
import SignIn from '../auth/SignIn/SignIn';
import SignUp from '../auth/SignUp/SignUp';

export default function Cart() {
  return (
    <div className='cart-everything'>
      <div className='cart-title'>
        <h1>Your Cart</h1>
      </div>
      <div className="account-section">
        <div className='sign-in-section'>
          <div className='sign-in-head2'>
            <h2>Sign In</h2>
          </div>
          <br></br>
          <SignIn />
        </div>
        <div className='sign-up-section'>
          <div className='sign-up-head2'>
            <h2>Sign Up</h2>
          </div>
          <br></br>
          <SignUp />
        </div>
      </div>
      <div className='authdetails-section'>
        <AuthDetails />
      </div>
    </div>
  );
};