import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BirthdayCandle.css';
import birthdayMusic from '../songs/chant.mp3';

const BirthdayCakeCandle = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);
  const confettiRef = useRef(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000); // Increased to 8 seconds to match longer confetti animations

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleClick = () => {
    setIsBlown(true);
    setShowConfetti(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleStart = () => {
    setGameStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  const generateConfetti = () => {
    // Create 150 confetti pieces
    return [...Array(150)].map((_, index) => {
      const left = Math.random() * 100; // Random position from 0 to 100%
      const size = Math.random() * 5 + 3; // Random size between 3 and 8px
      const startingTop = Math.random() * -300; // Start above the viewport
      const duration = Math.random() * 4 + 8; // Random duration between 8-12s
      
      return (
        <div
          key={`confetti-${index}`}
          className="confetti"
          style={{
            left: `${left}%`,
            top: `${startingTop}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationName: `confettiFall${index % 3}` // Cycle through 3 different fall patterns
          }}
        />
      );
    });
  };

  return (
    <div className="candle-container">
      {/* Audio element */}
      <audio 
        ref={audioRef}
        src={birthdayMusic}
      />

      {/* Confetti Container */}
      {showConfetti && (
        <div className="confetti-container" ref={confettiRef}>
          {generateConfetti()}
        </div>
      )}

      {/* Birthday text */}
      <h1 className="birthday-text">
        {gameStarted && !isBlown && "make a wish"}
        {isBlown && "happy birthday Imane!"}
      </h1>

      {/* Start button */}
      {!gameStarted && (
        <button 
          className="magic-button"
          onClick={handleStart}
        >
          ✨ Let's Celebrate! ✨
        </button>
      )}

      {/* Cake and candle */}
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>

        <div className="candle-wrapper">
          <div className="candle" style={{ opacity: isBlown ? 0.5 : 1 }}>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="top">
              <div className={`smoke ${isBlown ? 'puff-bubble' : ''}`}></div>
              <div className={`smoke ${isBlown ? 'puff-bubble' : ''}`}></div>
              <div className={`smoke ${isBlown ? 'puff-bubble' : ''}`}></div>
              <div className="knot"></div>
              <div 
                className={`flame ${isBlown ? 'puff' : 'burn'}`} 
                onClick={handleClick}
              ></div>
            </div>
          </div>
        </div>
        <div className="arrow">

        <button 
        className="back-arrow-button" 
        onClick={handleBack}
        aria-label="Go back to previous page"
      >
        <span className="arrow-icon">←</span>
      </button>
      </div>
      </div>

      {/* Candle glow effect */}
      {!isBlown && <div className="glow"></div>}
    </div>
  );
};

export default BirthdayCakeCandle;