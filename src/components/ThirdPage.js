import React, { useState, useEffect } from "react";
import "./ThirdPage.css";
import inamPhoto from "../assets/inam.jpg";

const ThirdPage = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(`January 8, ${currentYear} 00:00:00`);

    if (now > nextBirthday) {
      nextBirthday = new Date(`January 8, ${currentYear + 1} 00:00:00`);
    }

    const difference = nextBirthday - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReturn = () => {
    window.history.back();
  };

  const generateConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 150; i++) {
      const left = Math.random() * 100;
      const size = Math.random() * 5 + 3;
      const startingTop = Math.random() * -300;
      const duration = Math.random() * 4 + 8;
      
      confetti.push({
        left: `${left}%`,
        top: `${startingTop}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationName: `confettiFall${i % 3}`
      });
    }
    return confetti;
  };

  const confettiPieces = generateConfetti();

  return (
    <div className="birthday-container">
      <div className="confetti-container">
        {confettiPieces.map((conf, index) => (
          <div
            key={`confetti-${index}`}
            className="confetti"
            style={{
              left: conf.left,
              top: conf.top,
              width: conf.width,
              height: conf.height,
              animationDuration: conf.animationDuration,
              animationName: conf.animationName
            }}
          />
        ))}
      </div>

      <div className="birthday-content">
      <h1 className="birthday-title">Time Until Your Birthday</h1>
      <img src={inamPhoto} alt="Birthday Person" className="birthday-photo" />
        <div className="birthday-box">
          <div className="birthday-timer">
            <div className="time-section">
              <span className="time">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="label">DAYS</span>
            </div>
            <div className="time-section">
              <span className="time">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="label">HOURS</span>
            </div>
            <div className="time-section">
              <span className="time">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="label">MINS</span>
            </div>
            <div className="time-section">
              <span className="time">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="label">SECS</span>
            </div>
          </div>
        </div>
        <button className="return-arrow" onClick={handleReturn}>
                            ←
        </button>

      </div>
    </div>
  );
};

export default ThirdPage;