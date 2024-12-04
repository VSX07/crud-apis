const app = require('./app'); // Import the Express app
const http = require('http');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3001', // Allow frontend origin
  methods: 'GET,POST', // Allowed methods
  allowedHeaders: 'Content-Type', // Allowed headers
}));

const PORT = process.env.PORT || 3000;

// Create an HTTP server and start listening on the specified port
const server = http.createServer(app);

connectDB();

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
