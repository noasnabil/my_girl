import React from "react";
import "./FourthPage.css"; // Ensure your CSS file is linked properly
import centerPhoto from "../assets/white_heart.png"; // Path to your main photo
import pinkHeart from "../assets/pink_heart.png"; // Path to the pink heart image
import { useNavigate } from 'react-router-dom';

const BirthdayLetter = () => {
  // Function to go back to the previous page
  const handleReturn = () => {
    window.history.back(); // Navigates to the previous page
  };
  const handleBack = () => {
    navigate(-1);
  };
  const navigate = useNavigate();

  return (
    <div className="birthday-letter-container">
      {/* The big photo in the center */}
      <div className="center-photo">
        <img src={centerPhoto} alt="Center" className="photo" />
      </div>
        
      {/* Pink heart that when clicked will go back to the previous page */}
      <div className="pink-heart-container1">
        <img src={pinkHeart} alt="Pink Heart" className="pink-heart1" />
      </div>
       {/* Pixel Text */}
       <div className="pixel-text">
       Happy Birthday to the most energetic, vibrant soul I know. <br /><br />I wish you not just an amazing day today, but a life full<br /><br /> of love, laughter, good times, close bonds with your <br /><br />family, health, and especially wealth <br /><br />(I know you love that more than anything).<br /><br /> You're such a beautiful and incredible person,a person that <br /><br />i did  get along with and i still do til now. Having someone <br /><br /> like you in my life is truly amazing, and I’m excited<br /><br />  to see what life has in store for both of us.<br /><br />  If anyone ever asks me about joy in this life, <br /><br /> I’d point right at you. <br /><br /> It might sound odd coming from <br /><br /> someone you just knew recently, <br /><br /> but I genuinely appreciate you. <br /><br /> and yes, one more time <br /><br /> happy birthday, dumbass.<br /><br />  i love you.<br /><br /><br /><br />  -To My Imane 
      </div>
    
      <button 
        className="back-arrow-button" 
        onClick={handleBack}
        aria-label="Go back to previous page"
      >
        <span className="arrow-icon">←</span>
      </button>
        
    </div>
    
    
  );
};

export default BirthdayLetter;
