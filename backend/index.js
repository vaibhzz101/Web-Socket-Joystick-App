const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// WebSocket API endpoint
io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('joystickData', (data) => {
    console.log('Received Joystick Data:', data);

    // Broadcast the data to all connected clients
    io.emit('joystickData', data);
  });

  socket.on('disconnect', () => {
    console.log('user is disconnected');
  });
});

const authorizedUsers = {
    username: 'vaibhav',
    password: '12345',
  };
  
  // Middleware for authentication
  const authenticate = (req, res, next) => {
    const { username, password } = req.headers;
    if (username === authorizedUsers.username && password === authorizedUsers.password) {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  app.get('/websocket', authenticate, (req, res) => {
    res.status(200).json({ message: 'WebSocket connection upgraded successfully' });
  });
  
const port = 7070;
server.listen(port, () => {
  console.log(`WebSocket API server running on port ${port}`);
});
