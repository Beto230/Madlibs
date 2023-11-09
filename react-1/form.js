// Form.js (Form component)
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [adjective, setAdjective] = useState('');
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ adjective, noun, verb });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adjective:
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </label>
      <br />
      <label>
        Noun:
        <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
      </label>
      <br />
      <label>
        Verb:
        <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Story</button>
    </form>
  );
};

export default Form;
