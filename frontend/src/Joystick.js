// File: src/Joystick.js
import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import "./style/styles.css"
const ENDPOINT = 'http://localhost:7070';

const Joystick = () => {
  const [joystickData, setJoystickData] = useState('');

  const handleJoystickMove = (data) => {
    // Send joystick data to the WebSocket server
    const socket = socketIOClient(ENDPOINT);
    socket.emit('joystickData', data);

    // Update the state to display the received data
    setJoystickData(data);
  };

  return (
    <div>

    {/*  I use simple buttons to simulate joystick movements */}
    <button className="joystick-button" onClick={() => handleJoystickMove('UP')}>
      Up
    </button>
    <button className="joystick-button" onClick={() => handleJoystickMove('DOWN')}>
      Down
    </button>
    <button className="joystick-button" onClick={() => handleJoystickMove('LEFT')}>
      Left
    </button>
    <button className="joystick-button" onClick={() => handleJoystickMove('RIGHT')}>
      Right
    </button>

    <p className="joystick-data">Received Joystick Data: {joystickData}</p>
  </div>
  );
};

export default Joystick;
