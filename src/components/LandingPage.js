import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LandingPage.css';

const LandingPage = () => {
  const [code, setCode] = useState('');
  const correctCode = '01082008';
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = (number) => {
    if (code.length < 8) {
      setCode((prevCode) => prevCode + number);
    }
  };

  const handleDelete = () => {
    setCode((prevCode) => prevCode.slice(0, -1));
  };

  const handleSubmit = () => {
    if (code === correctCode) {
      navigate('/second-page'); // Navigate to SecondPage
    } else {
      alert('Incorrect password. Try again.');
      setCode('');
    }
  };

  const maskCode = (code) => {
    return '*'.repeat(code.length);
  };

  return (
    <div className="landing-page">
      <div className="content">
        <div className="lock-machine-container">
          <input
            type="text"
            value={maskCode(code)}
            readOnly
            className={`code-input ${code.length > 0 ? 'has-value' : ''}`}
            maxLength="8"
            placeholder="Enter password"
          />
          <div className="keypad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <button
                key={number}
                onClick={() => handleButtonClick(number.toString())}
              >
                {number}
              </button>
            ))}
            <button onClick={() => handleButtonClick('*')}>*</button>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={() => handleButtonClick('#')}>#</button>
            <button onClick={handleDelete} className="delete-btn">
              ←
            </button>
          </div>
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
