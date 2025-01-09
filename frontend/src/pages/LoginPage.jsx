import React from 'react';

const HomePage = () => {
  const handleSpotifyLogin = () => {
    // Redirect user to the Spotify login page
    const clientId = '04021eb4ab4a4e66896d07b8011ac453'
    const redirectUri = 'http://localhost:5173/callback';
    const scopes = [
      'playlist-read-collaborative',
      'playlist-modify-private',
      'playlist-modify-public',
      'user-top-read',
      'user-read-recently-played',
      'user-library-read',
      'user-read-currently-playing',
      'user-modify-playback-state',
      'user-read-playback-state',
      'streaming',
    ].join(' ');
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to Musify</h1>
        <p>
            Discover, manage, and listen to your favorite Spotify playlists.
            This app lets you explore music in a whole new way!
        </p>
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
            onClick={handleSpotifyLogin}
        >
            Sign in with Spotify
        </button>
    </div>
  );
};

export default HomePage;