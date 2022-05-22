import React from 'react';
import UsefulResourcesList from './UsefulResourcesList';
import './css/SectionOne.css';

const SectionOne = () => {
  return (
    <section className='large-text'>
      <h2>Introduction</h2>
      <p>
        This spring, <strong>Chess Coders</strong> offers a<u>free training programme</u>, specifically tailored for
        students with high interest in a Web Development career.
      </p>
      <p>Before starting out, please consult our crafted list of useful resources to consult during your training:</p>
      <UsefulResourcesList />
      <p className='offer-message'>
        Come join us at <span className='span-chess'>CHESS</span>
        <span className='span-coders'>CODERS</span>
      </p>
    </section>
  );
};

export default SectionOne;
