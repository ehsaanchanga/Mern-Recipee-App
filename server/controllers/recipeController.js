const Recipe = require("../model/Recipe");
const User = require("../model/User");

const getAllRecipees = async (req, res) => {
  const allRecipees = await Recipe.find();
  if (!allRecipees.length)
    return res.status(204).json({ message: "no recipees found" });
  res.json(allRecipees);
};

const createNewRecipee = async (req, res) => {
  try {
    const response = await Recipe.create(req.body);

    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRecipee = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.body.recipeID);
    const user = await User.findById(req.body.userID);

    user.savedRecipes.push(recipe);
    await user.save();

    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSavedRecipeIds = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const savedRecipes = await Recipe.find({
      _id: { $in: user.savedRecipes },
    });
    res.status(201).json({ savedRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllRecipees,
  createNewRecipee,
  updateRecipee,
  getSavedRecipeIds,
  getSavedRecipes,
};
