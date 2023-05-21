import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase";
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <div className='sign-in-title'>
          <h3>Log in to your account</h3>
        </div>
        <div className='sign-in-form'>
          <div className='sign-in-inputs'>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            ></input><br></br>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            ></input>
          </div>
          <br></br>
          <div className='sign-in-button'>
            <button type="submit">Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;