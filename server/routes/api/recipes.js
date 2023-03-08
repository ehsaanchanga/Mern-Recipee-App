const express = require("express");
const router = express.Router();
const recipeController = require("../../controllers/recipeController");

router
  .route("/")
  .get(recipeController.getAllRecipees)
  .post(recipeController.createNewRecipee)
  .put(recipeController.updateRecipee);

router.get("/savedRecipes/ids/:userId", recipeController.getSavedRecipeIds);
router.get("/savedRecipes/:userId", recipeController.getSavedRecipes);
module.exports = router;
