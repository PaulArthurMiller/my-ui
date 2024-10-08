import React, { useState } from 'react';
import './SharedStyles.css'; // Import the centralized CSS file
import { getAssistantResponse } from '../api/chatApi'; // Import the API call function

const Chat = () => {
  const [messages, setMessages] = useState([]); // Store the chat history
  const [userInput, setUserInput] = useState(''); // Store the current input

  // Function to handle user input submission
  const handleSend = async () => {
    if (userInput.trim() !== '') {
      const userMessage = { role: 'user', content: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Here you would call your backend API to get the model's response
      try {
        const data = await getAssistantResponse(userInput);
        const assistantMessage = { role: 'assistant', content: data.response };

        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        const errorMessage = { role: 'assistant', content: 'Sorry, there was an error processing your request.' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }

      setUserInput('');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle pressing Enter key to send a message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <div className="sidebar-graphics">
          <img src="user-avatar.png" alt="User Avatar" className="user-avatar" />
          {/* Placeholder for additional graphics */}
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <strong>{message.role === 'user' ? 'You' : 'Assistant'}:</strong> {message.content}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;