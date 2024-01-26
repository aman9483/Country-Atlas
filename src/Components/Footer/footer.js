import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0'
      }}
    >
      <div>
        <a href="https://www.instagram.com/your_instagram_account/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" style={{ color: '#e4405f' }} />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_profile/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" style={{ color: '#0077b5' }} />
        </a>
        {/* Add links to your portfolio or any other social media platforms */}
      </div>
      <div>
        &copy; 2022 Aman | Made by Aman
      </div>
    </div>
  );
};

export default Footer;
