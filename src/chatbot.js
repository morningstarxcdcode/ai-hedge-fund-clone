import React, { useState } from 'react';
import { generateMarketInsights } from './ai_insights.js';

function Chatbot() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setResponses(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    const botResponse = await generateMarketInsights(userMessage);
    setResponses(prev => [...prev, { sender: 'bot', text: botResponse || 'Sorry, I could not generate a response.' }]);
  };

  return (
    <div>
      <h2>Market Insights Chatbot</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {responses.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <b>{msg.sender === 'user' ? 'You' : 'Bot'}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
        placeholder="Ask about the market..."
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={handleSend} style={{ padding: '8px 12px', marginLeft: '5px' }}>Send</button>
    </div>
  );
}

export default Chatbot;
