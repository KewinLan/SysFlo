import './Privacy.scss';
import React from 'react';

export default function Privacy() {
  return (
    <>
      <div className='privacy-title'>
        <h1>Privacy Policy</h1>
      </div>
      <div className='privacy-body'>
        <p>
          By using our website, you agree to give us some of your information. We will store this information and process it for the purposes of, including, but not limited to, marketing, account creation, and any other legal requirements we have.
          Information we may collect include:<br></br>
          First and last name<br></br>
          Email addresses<br></br>
          Phone numbers<br></br>
          Billing addresses<br></br>
          Credit card information<br></br>
          Date of birth<br></br>
          The times and dates you accessed our website<br></br><br></br></p>
          <p>
          Cookies<br></br>
          By using our website, you agree that we will store cookies with your personal information on it on your device.<br></br>
          Third Parties<br></br>
          You agree that we will sell your data to third parties such as marketing agencies for the purposes of advertising.<br></br>
          Opt-Out<br></br>
          You may opt-out of parts of this privacy policy by contacting us at privacy@Chewnamic.com. You may also request a copy of your data. You may also request to have your data modified.
        </p>
      </div>
    </>
  );
};