// Story.js (Story component)
import React from 'react';

const Story = ({ formData, onReset }) => {
  const { adjective, noun, verb } = formData;

  return (
    <div>
      <p>
        Once upon a time, there was a {adjective} {noun} who loved to {verb} all day long.
      </p>
      <button onClick={onReset}>Play Again</button>
    </div>
  );
};

export default Story;
