// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Statik fayllar
app.use(express.static(path.join(__dirname)));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server ishga tushadi
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlamoqda`);
});
