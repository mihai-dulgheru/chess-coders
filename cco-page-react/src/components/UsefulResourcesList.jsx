import React from 'react'
import UsefulResource from './UsefulResource'
import usefulResource from '../useful-resources'
import './css/UsefulResourcesList.css'

const UsefulResourcesList = () => {
  return (
    <ul>
      {usefulResource.map((item) => (
        <UsefulResource key={item.name} {...item} />
      ))}
    </ul>
  )
}

export default UsefulResourcesList
