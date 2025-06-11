const { supabase } = require('../utils/supabaseClient.js');

exports.saveRecipe = async (req, res) => {
  const { user_id, recipe_id } = req.body;
  if (!user_id || !recipe_id) {
    return res.status(400).json({ message: 'Missing user_id or recipe_id' });
  }

  try {
    // 1. Find or create a recipe_saved row for this user
    let { data: savedList, error } = await supabase
      .from('recipe_saved')
      .select('recipe_saved_id')
      .eq('user_id', user_id)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
      throw error;
    }

    // If no saved list exists, create one
    if (!savedList) {
      const { data: newSavedList, error: createError } = await supabase
        .from('recipe_saved')
        .insert([{ user_id }])
        .select('recipe_saved_id')
        .single();
      if (createError) throw createError;
      savedList = newSavedList;
    }

    // 2. Insert into recipe_saved_items
    const { data: savedItem, error: itemError } = await supabase
      .from('recipe_saved_items')
      .insert([{ recipe_saved_id: savedList.recipe_saved_id, recipe_id }])
      .select()
      .single();

    if (itemError) throw itemError;

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

exports.getSavedRecipes = async (req, res) => {
  const { user_id } = req.params;
  try {
    const { data, error } = await supabase
      .from('recipe_saved')
      .select(`
        recipe_saved_id,
        recipe_saved_items (
          recipe_id,
          recipe (
            recipe_id,
            title,
            image,
            preparation_time,
            difficulty
          )
        )
      `)
      .eq('user_id', user_id);

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};