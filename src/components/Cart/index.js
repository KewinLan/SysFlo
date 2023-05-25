import React from 'react';
import ImageSlider from "../ImageSlider";
// import AuthDetails from '../auth/AuthDetails/AuthDetails';
import './Cart.scss';
// import SignIn from '../auth/SignIn/SignIn';
// import SignUp from '../auth/SignUp/SignUp';

export default function Cart() {
  const slides = [
    {url: 'images/WritingUtencilsButton.png', title: 'Beach'},
    {url: 'images/ElasticsButton.png', title: 'House'},
    {url: 'images/PaperClipsButton.png', title: 'Boat'},
    {url: 'images/PinsButton.png', title: 'Car'},
    {url: 'images/StickyNotesButton.png', title: 'Road'},
    {url: 'images/BinderClipsButton.png', title: 'Forest'}
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className='cart-everything'>
      <div className='cart-title'>
        <h1>Your Cart</h1>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
};