import React, { useState } from 'react';

const UserStatsPage = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  // State to track selected button
  const [selectedButton, setSelectedButton] = useState(1); // Default selection is first button

  const handleButtonClick = (id) => {
    // Set the selected button to the clicked one (it will always stay selected)
    setSelectedButton(id);
  };

  return (
    <div>
      <h1 className="h1">My Top Tracks and Artists</h1>
      <div style={{ display: 'inline', alignItems: 'center' }}>
        <p className="p1">Over the last:</p>
        <button
          className={`option-button ${selectedButton === 'button1' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button1')}
        >
          1 Month
        </button>
        <button
          className={`option-button ${selectedButton === 'button2' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button2')}
        >
          6 Months
        </button>
        <button
          className={`option-button ${selectedButton === 'button3' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button3')}
        >
          1 Year
        </button>
      </div>
    </div>
  );
};

export default UserStatsPage;