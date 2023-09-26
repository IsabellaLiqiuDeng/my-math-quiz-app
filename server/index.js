const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use a port of your choice

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
