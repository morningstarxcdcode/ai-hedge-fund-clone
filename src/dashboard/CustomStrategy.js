import React, { useState } from 'react';

function CustomStrategy() {
  const [strategyCode, setStrategyCode] = useState('// Write your strategy here\n');

  const handleChange = (e) => {
    setStrategyCode(e.target.value);
  };

  const handleRun = () => {
    // Placeholder: Evaluate or send strategy code to backend for execution
    alert('Strategy execution is not implemented yet.');
  };

  return (
    <div>
      <h2>Custom Strategy Editor</h2>
      <textarea
        value={strategyCode}
        onChange={handleChange}
        rows={10}
        cols={80}
        style={{ fontFamily: 'monospace', fontSize: '14px' }}
      />
      <br />
      <button onClick={handleRun}>Run Strategy</button>
    </div>
  );
}

export default CustomStrategy;
