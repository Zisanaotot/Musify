import React from 'react';

const HomePage = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  const handleUserStats = () => {};
  const handleMusicRecs = () => {};

  return (
    <div style={{ padding: '50px' }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div style={{ maxwidth: '48%' }}>
          <h1>Check out your top tracks, artists, and albums on Spotify</h1>
          <p1>See all your Spotify listening stats and activity! <br /> <br /> </p1>
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
          <h2>View your personalized music recommendations based on your current favourite music</h2>
          <p2>Listen to these personalized music recommendations and simply add them to any of your Spotify playlists! <br /> <br /> </p2>
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