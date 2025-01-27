import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondPage.css'; // Import your CSS file
// Import your icons
import icon1 from '../assets/clock.png';
import icon2 from '../assets/love_letter.png';
import icon3 from '../assets/note.png';
import icon4 from '../assets/cake.png';
import icon5 from '../assets/camera.png';

const SecondPage = () => {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div className="second-page">
      <div className="icon-container">
        <div className="icon-item">
          <img
            src={icon5}
            alt="Icon 5"
            className="icon5"
            style={{  height: '150px', width: 'auto', objectFit: 'contain' }}
            onClick={() => handleIconClick('/seventh')}
          />
          <p className="icon-text text-5">Birthday Girl</p>
        </div>
        <div className="icon-item">
          <img
            src={icon1}
            alt="Icon 1"
            className="icon"
            onClick={() => handleIconClick('/Third')}
          />
          <p className="icon-text">Countdown</p>
        </div>
        <div className="icon-item">
          <img
            src={icon2}
            alt="Icon 2"
            className="icon"
            onClick={() => handleIconClick('/fourth')}
          />
          <p className="icon-text">Letter</p>
        </div>
        <div className="icon-item">
          <img
            src={icon4}
            alt="Icon 4"
            className="icon"
            onClick={() => handleIconClick('/sixth')}
          />
          <p className="icon-text">Birthday Cake</p>
        </div>
        <div className="icon-item">
          <img
            src={icon3}
            alt="Icon 3"
            className="icon"
            onClick={() => handleIconClick('/fifth')}
          />
          <p className="icon-text">Playlist</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
