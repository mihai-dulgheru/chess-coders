import React from 'react';
import Form from './Form';
import './css/SectionThree.css';

const SectionThree = () => {
  return (
    <section>
      <h2>Get in touch</h2>
      <p className='text-center'>
        Use the form below to contact us. Make sure to fill in all of the
        <em>required</em> fields.
      </p>
      <Form />
    </section>
  );
};

export default SectionThree;
