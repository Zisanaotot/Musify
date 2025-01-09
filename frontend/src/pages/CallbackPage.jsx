import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace('#', '?'));
    const accessToken = params.get('access_token');
  
    if (accessToken) {
      localStorage.setItem('spotify_access_token', accessToken);
      setTimeout(() => {
        navigate('/home');
      }, 500); // Add a small delay before navigation
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;
