const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { requireAuth } = require('../middlewares/authenticationMiddleware');


router.get('/', recipeController.getAllRecipes); //to get all recipes

router.get('/:id', recipeController.getRecipeById); //to get specific recipe

router.post('/', requireAuth, recipeController.createRecipe); //to create recipe, needs user login authentication

router.put('/:id', requireAuth, recipeController.updateRecipe); //to update recipe, needs user login authentication 

router.delete('/:id', requireAuth, recipeController.deleteRecipe); //to delete recipe, needs user login authentication 

module.exports = router;
