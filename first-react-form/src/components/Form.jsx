import React, { useState } from 'react'
import './Form.css'

function Form ({ maxLength }) {
  const [message, setMessage] = useState('')
  const [noCharacters, setNoCharacters] = useState(0)

  const handleChange = (e) => {
    setMessage(e.target.value)
    setNoCharacters(Number(e.target.value.length))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (noCharacters === 0) {
      return alert('Please enter a message.')
    }
    if (noCharacters > maxLength) {
      return alert(`The maximum length of the message is ${maxLength} characters.`)
    }
    alert('Your message was sent.')
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <h1>Send us a message</h1>
      <label>
        <p>Your message</p>
        <textarea value={message} onChange={handleChange} placeholder='Enter your message...' />
      </label>
      <p
        // className={(noCharacters === 0 || noCharacters > maxLength) && 'error-message'}
        className={noCharacters === 0 || noCharacters > maxLength ? 'error-message' : undefined}
      >
        You entered {noCharacters}/{maxLength} characters
      </p>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
