import React from 'react';
import './css/Header.css';

const Header = () => {
  const handleTitleClick = () => {
    window.location.reload();
  };

  const handleInfoClick = () => {
    alert('Info coming soon');
  };

  const handleAccountClick = () => {
    alert('Account coming soon...');
  };

  return (
    <header>
      <ion-icon name='information-circle-outline' onClick={handleInfoClick}></ion-icon>
      <h1 onClick={handleTitleClick}>Training Programme</h1>
      <ion-icon name='person-outline' onClick={handleAccountClick}></ion-icon>
    </header>
  );
};

export default Header;
