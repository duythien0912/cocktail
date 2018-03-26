import express from "express";
const router = express.Router();

// Require controller modules.
import {
  ingredient_create_get,
  ingredient_create_post,
  ingredient_delete_get,
  ingredient_delete_post,
  ingredient_update_get,
  ingredient_update_post,
  ingredient_detail,
  ingredient_list
} from "../controllers/ingredientController";

// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get("/ingredient/create", ingredient_create_get);

// POST request for creating Cocktail.
router.post("/ingredient/create", ingredient_create_post);

// GET request to delete Cocktail.
router.get("/ingredient/:id/delete", ingredient_delete_get);

// POST request to delete Cocktail.
router.post("/ingredient/:id/delete", ingredient_delete_post);

// GET request to update Cocktail.
router.get("/ingredient/:id/update", ingredient_update_get);

// POST request to update Cocktail.
router.post("/ingredient/:id/update", ingredient_update_post);

// GET request for one Cocktail.
router.get("/ingredient/:id", ingredient_detail);

// GET request for list of all Cocktail items.
router.get("/ingredients", ingredient_list);

export default router;
