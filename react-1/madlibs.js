// Madlib.js (Top-level component)
import React, { useState } from 'react';
import Form from './Form';
import Story from './Story';

const Madlib = () => {
  const [formData, setFormData] = useState({});
  const [showStory, setShowStory] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowStory(true);
  };

  const handleReset = () => {
    setFormData({});
    setShowStory(false);
  };

  return (
    <div className="madlib-container">
      <h1>Madlibs Game</h1>
      {showStory ? (
        <Story formData={formData} onReset={handleReset} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Madlib;
