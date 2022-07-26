import React from 'react'

const TechnologyCard = ({ image, title }) => {
  return (
    <div className='glance'>
      <h3>{title}</h3>
      <img src={image.src} alt={image.alt} />
    </div>
  )
}

export default TechnologyCard
