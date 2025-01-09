import React from 'react';

const HomePage = () => {
  const accessToken = localStorage.getItem('spotify_access_token');

  const handleUserStats = () => {};
  const handleMusicRecs = () => {};

  return (
    <div style={{ padding: '50px' }}>
        <h1>Check out your top tracks, artists, and albums on Spotify - Or view your personalized music recommendations based on your current favourite music</h1>
        <p1 style={{padding: '25px', textAlign: 'left'}}>
            See all your Spotify listening stats and activity!
        </p1>
        <p2 style ={{padding: '25px', textAlign: 'right'}}>
            Listen to these personalized music recommendations and simply add them to any of your Spotify playlists!
        </p2>
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
  );

};

export default HomePage;