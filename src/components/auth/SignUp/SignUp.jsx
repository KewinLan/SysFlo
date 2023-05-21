import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase";
import './SignUp.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
        <div className='sign-up-title'>
          <h3>Create an account</h3>
        </div>
        <div className='sign-up-form'>
          <div className='sign-up-inputs'>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            ></input>
            <br></br>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            ></input>
            <div className='sign-up-button'>
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;