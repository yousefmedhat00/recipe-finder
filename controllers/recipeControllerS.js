const { supabase } = require('../utils/supabaseClient.js');

// exports.getAllRecipes = async (req, res) => {
//     try {
//       const { data, error } = await supabase
//         .from('recipe')
//         .select('*');
  
//       if (error) {
//         throw error;
//       }
  
//       res.status(200).json(data);
//     }
//     catch (error) {
//       console.error('Error fetching recipes:', error);
//       res.status(500).json({ message: 'Internal server error'});
//     }
//   };
exports.getAllRecipes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('recipe') // Make sure your table is named 'recipe'
      .select('*');

    if (error) {
      console.error('Supabase error:', error); // Log the actual Supabase error
      return res.status(500).json({ message: 'Internal server error', error });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};
  
  exports.getRecipeById = async (req, res) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
        .from ('recipe')
        .select('*')
        .eq('recipe_id', id)
        .single();

        if (error){
            throw error;
        }
        if (data) {
            res.status(200).json(data);
          } else {
            res.status(404).json({ message: 'Recipe not found' });
          }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
  };
  
//   exports.createRecipe = (req, res) => {
//     const { title, description, ingredients, instructions } = req.body;
//     if (!title || !description || !ingredients || !instructions) {
//       return res.status(400).json({ message: 'Missing fields in request' });
//     }
    
//     const newRecipe = {
//       id: recipes.length + 1,
//       title,
//       description,
//       ingredients,
//       instructions
//     };
//     recipes.push(newRecipe);
//     res.status(201).json(newRecipe);
//   };
  
//   exports.updateRecipe = (req, res) => {
//     const recipeId = parseInt(req.params.id);
//     let recipe = recipes.find(r => r.id === recipeId);
//     if (recipe) {
//       const { title, description, ingredients, instructions } = req.body;
//       recipe = { ...recipe, title, description, ingredients, instructions };
//       res.json(recipe);
//     } else {
//       res.status(404).json({ message: 'Recipe not found' });
//     }
//   };
  
//   exports.deleteRecipe = (req, res) => {
//     const recipeId = parseInt(req.params.id);
//     const recipeIndex = recipes.findIndex(r => r.id === recipeId);
//     if (recipeIndex !== -1) {
//       recipes.splice(recipeIndex, 1);
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Recipe not found' });
//     }
//   };