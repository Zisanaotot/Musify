import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleUserStats = () => {
    setTimeout(() => {
      navigate('/userstats');
    }, 500);
  };

  const handleMusicRecs = () => {
    setTimeout(() => {
      navigate('/songrecs');
    }, 500);
  };

  return (
    <div style={{ padding: '50px' }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div style={{ maxwidth: '48%' }}>
          <h className="h1">Check out your top tracks, artists, and albums on Spotify</h>
          <p className="p1">See all your Spotify listening stats and activity!  <br /> </p>
          <button
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#1DB954',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
            }}
            onClick={handleUserStats}
          >
              My Spotify Stats
          </button>
        </div>
        <div style={{ maxwidth: '48%' }}>
          <h className="h2">View your personalized music recommendations based on your current favourite music</h>
          <p className="p2">Listen to these personalized music recommendations and simply add them to any of your Spotify playlists! <br /> </p>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#1DB954',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
            }}
            onClick={handleMusicRecs}
          >
            My Music Recommendations
          </button>
        </div>
      </div>
    </div>
  );

};

export default HomePage;