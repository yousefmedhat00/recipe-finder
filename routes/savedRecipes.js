const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/savedRecipesController.js');

router.post('/', recipeController.saveRecipe);
router.get('/:user_id', recipeController.getSavedRecipes);

module.exports = router;