const express = require('express');
const app = express();
const PORT = 3000;
const recipeRoutes = require('./routes/recipes.js'); 

app.use(express.json());


app.use('/recipes', recipeRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
