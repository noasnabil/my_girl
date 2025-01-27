import React, { useState } from 'react';
import p1 from '../assets/i1.jpeg';
import p2 from '../assets/i2.jpeg';
import p3 from '../assets/i3.jpeg';
import p4 from '../assets/i4.jpeg';
import p5 from '../assets/i5.jpeg';
import p6 from '../assets/i6.jpeg';
import p7 from '../assets/i7.jpeg';
import p8 from '../assets/i8.jpeg';
import p9 from '../assets/i9.jpeg';
import p10 from '../assets/i10.jpeg';

import bgImage from '../assets/background.jpeg'; // Background image

// Array of imported photos
const photoUrls = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track the selected photo

  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };

  const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Ensures exactly 3 items per row
    gap: '12px', // Smaller gap between photos
    padding: '16px', // Adjusted padding to reduce overall size
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the photo grid
    borderRadius: '8px', // Reduced border radius
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '635px', // Increased height to add a bit more space
    overflowY: 'auto', // Enable vertical scrolling
    width: '80vw', // Adjust width of the photo grid
    marginTop: '-60px', // Move the container 20px upwards
  };
  

  const photoStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '6px', // Reduced border radius
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const photoHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  const imgHoverStyle = {
    transform: 'scale(1.1)',
  };

  const closeModal = () => {
    setSelectedPhoto(null); // Close the modal by setting selected photo to null
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        {photoUrls.map((url, index) => (
          <div
            key={index}
            style={photoStyle}
            onClick={() => setSelectedPhoto(url)} // Set the clicked photo
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = photoHoverStyle.transform;
              e.currentTarget.style.boxShadow = photoHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <img
              src={url}
              alt={`Photo ${index + 1}`}
              style={imageStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = imgHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
          onClick={closeModal} // Close modal when background is clicked
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'hidden',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image itself
          >
            <img
              src={selectedPhoto}
              alt="Enlarged Photo"
              style={{
                width: 'auto', // Allow the image to display with its original dimensions
                height: 'auto',
                maxWidth: '90vw', // Limit the width to 90% of the viewport width
                maxHeight: '90vh', // Limit the height to 90% of the viewport height
                objectFit: 'contain', // Maintain the aspect ratio
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        /* Webkit Scrollbar Styling for Chrome, Safari, and Edge */
        .photos-wrapper::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .photos-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Gradient color for thumb */
          border-radius: 10px;
        }
        .photos-wrapper::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.4); /* Light background for track */
          border-radius: 10px;
        }
        /* Firefox Scrollbar Styling */
        .photos-wrapper {
          scrollbar-color: #ff7e5f #feb47b; /* Thumb color and track color for Firefox */
        }
      `}</style>
    </div>
  );
};

export default Photos;
