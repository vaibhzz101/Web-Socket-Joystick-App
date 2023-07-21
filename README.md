# Web-Socket-Joystick-App

### Documentation

#### WebSocket API and React Application

This repository contains a WebSocket API server and a React application that enables users to interact with the joystick API. The WebSocket API handles a stream of string data received from the React application, representing user input from a simple joystick component.

### Running the WebSocket API Server

To start the WebSocket API server, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Navigate to the root directory of the project.
3. Install the dependencies by running:

```bash
npm install
```

4. Start the WebSocket API server by running:

```bash
node server.js
```

The server will run on `http://localhost:7070`.

### Running the React Application

To run the React application, follow these steps:

1. Open a new terminal.
2. Navigate to the frontend directory.
3. Install the dependencies by running:

```bash
npm install
```

4. Start the React application by running:

```bash
npm start
```

The React application will be accessible at `http://localhost:3001`.

### Joystick App Interface and CSS Styling

The React application interface includes a simple joystick component that generates string data when moved. Clicking on the "Up," "Down," "Left," or "Right" buttons simulates the joystick's movements. The received data from the WebSocket API will be displayed below the buttons.

The application is styled using CSS to enhance the visual presentation. The styles are defined in the `style.css` file inside the `src` folder of the React application. The styles include a joystick container with flexbox layout and buttons with margins and padding for better spacing.

### WebSocket API Architecture

The WebSocket API follows the Socket.IO library implementation with a single WebSocket endpoint (`/websocket`). Clients can connect to this endpoint to send and receive joystick data.

When a user moves the joystick in the React application, the WebSocket client emits the joystick data to the server via the `joystickData` event. The server then broadcasts this data to all connected clients, including the sender.

### RESTful Endpoints

The WebSocket API includes a simple RESTful endpoint (`GET /websocket`) that performs authentication before upgrading the connection to a full WebSocket stream. For demonstration purposes, the authentication is based on a secret token sent as headers (`username` and `password`) in the HTTP request. In a production environment, it is essential to use more robust authentication mechanisms.

### Security

Please note that the current implementation of authentication is not secure for production use. In real-world scenarios, you should implement more secure authentication mechanisms such as OAuth, JWT, or API keys, along with SSL/TLS encryption for secure communication.

### Presentation

This repository showcases a basic implementation of the WebSocket API with React integration and CSS styling. In a real-world application, additional features, optimizations, and security measures may be required depending on your specific use case.

You can find the complete WebSocket API server code in `index.js` in the backend directory, the React application code in the `/fronend/src` folder, and the CSS styles in the `frontend/src/style.css` file.


---
