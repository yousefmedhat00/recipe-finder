const express = require('express');
const app = express();

app.use(express.json());

const recipeRoutes = require('./routes/recipes'); 
app.use('/recipes', recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});