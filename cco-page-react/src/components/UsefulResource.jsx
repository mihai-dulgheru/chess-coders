import React from 'react'

const UsefulResource = ({ name, link }) => {
  return (
    <li>
      <strong>
        <a href={link} target='_blank' rel='noreferrer'>
          {name.split('-')[0]}
        </a>
      </strong>
      {`– ${name.split('-')[1]}`}
    </li>
  )
}

export default UsefulResource
