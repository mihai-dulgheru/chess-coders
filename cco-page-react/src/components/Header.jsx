import React from 'react'
import './css/Header.css'

const Header = () => {
  const handleTitleClick = () => {
    window.location.reload()
  }

  const handleInfoClick = () => {
    alert('Info coming soon')
  }

  const handleAccountClick = () => {
    alert('Account coming soon...')
  }

  return (
    <header>
      <ion-icon name='information-circle-outline' onClick={handleInfoClick} />
      <h1 onClick={handleTitleClick}>Training Programme</h1>
      <ion-icon name='person-outline' onClick={handleAccountClick} />
    </header>
  )
}

export default Header
