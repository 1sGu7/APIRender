const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// API route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
