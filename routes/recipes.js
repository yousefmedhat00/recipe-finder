const express = require('express');
const router = express.Router();


let recipes = [
  { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['spaghetti', 'eggs', 'cheese', 'bacon'], instructions: 'Boil pasta, mix with eggs, cheese, and bacon.' },
  { id: 2, title: 'Chicken Alfredo', description: 'A creamy pasta dish with chicken.', ingredients: ['chicken', 'pasta', 'cream', 'cheese'], instructions: 'Cook chicken, boil pasta, mix with cream and cheese.' }
];


// router.get('/', (req, res) => {
//   res.send('List of all recipes');
// });

// GET a single recipe by ID
router.get('/:id', (req, res) => {
  const recipeId = parseInt(req.params.id); // get id from URL
  const recipe = recipes.find(r => r.id === recipeId); // find recipe

  if (recipe) {
    res.json(recipe); // if found, send recipe
  } else {
    res.status(404).json({ message: 'Recipe not found' }); // if not found, send error
  }
});


router.post('/', (req, res) => {
  const { title, description, ingredients, instructions } = req.body;

  if (!title || !description || !ingredients || !instructions) {
    return res.status(400).json({ message: 'Missing fields in request' });
  }

  // Create new recipe
  const newRecipe = {
    id: recipes.length + 1, 
    title,
    description,
    ingredients,
    instructions
  };

  recipes.push(newRecipe);
  console.log("New recipe added:", newRecipe);

  res.status(201).json(newRecipe); 
});


router.put('/:id', (req, res) => {
  res.send(`Recipe with ID ${req.params.id} updated!`);
});

router.delete('/:id', (req, res) => {
  res.send(`Recipe with ID ${req.params.id} deleted!`);
});

router.get('/', (req, res) => {
  res.json(recipes);
});


module.exports = router;
