let recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['spaghetti', 'eggs', 'cheese', 'bacon'], instructions: 'Boil pasta, mix with eggs, cheese, and bacon.' },
    { id: 2, title: 'Chicken Alfredo', description: 'A creamy pasta dish with chicken.', ingredients: ['chicken', 'pasta', 'cream', 'cheese'], instructions: 'Cook chicken, boil pasta, mix with cream and cheese.' }
  ];
  

  exports.getAllRecipes = (req, res) => {
    res.json(recipes);
  };
  
  exports.getRecipeById = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };

  jasdbsajdn
  
  exports.createRecipe = (req, res) => {
    const { title, description, ingredients, instructions } = req.body;
    if (!title || !description || !ingredients || !instructions) {
      return res.status(400).json({ message: 'Missing fields in request' });
    }
    
    const newRecipe = {
      id: recipes.length + 1,
      title,
      description,
      ingredients,
      instructions
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  };
  
  exports.updateRecipe = (req, res) => {
    const recipeId = parseInt(req.params.id);
    let recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      const { title, description, ingredients, instructions } = req.body;
      recipe = { ...recipe, title, description, ingredients, instructions };
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };
  
  exports.deleteRecipe = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);
    if (recipeIndex !== -1) {
      recipes.splice(recipeIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };
  