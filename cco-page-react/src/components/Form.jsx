import React from 'react';
import './css/Form.css';

function Form() {
  return (
    <form>
      <input type='text' placeholder='Your name...' name='name' />
      <input type='email' placeholder='Your email...' name='email' />
      <label htmlFor='date'>Please choose a date</label>
      <input type='date' name='date' />
      <label htmlFor='category'>Please choose a category</label>
      <select name='category'>
        <option value='general'>General</option>
        <option value='technical'>Technical</option>
        <option value='other'>Other</option>
      </select>
      <label htmlFor='message'>Your message</label>
      <textarea rows='6' name='message'></textarea>
      <div>
        <input type='checkbox' name='agree-terms' value='Agree' required />
        <label htmlFor='agree-terms'>I agree to the terms and conditions</label>
        <br />
      </div>
      <button>
        Send message <ion-icon name='send-outline'></ion-icon>
      </button>
    </form>
  );
}

export default Form;