import express from "express";
const router = express.Router();

// Require controller modules.
import {
  index,
  cocktail_create_get,
  cocktail_create_post,
  cocktail_delete_get,
  cocktail_delete_post,
  cocktail_update_get,
  cocktail_update_post,
  cocktail_detail,
  cocktail_list
} from "../controllers/cocktailController";

// GET catalog home page.
router.get("/", index);

// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get("/cocktail/create", cocktail_create_get);

// POST request for creating Cocktail.
router.post("/cocktail/create", cocktail_create_post);

// GET request to delete Cocktail.
router.get("/cocktail/:id/delete", cocktail_delete_get);

// POST request to delete Cocktail.
router.post("/cocktail/:id/delete", cocktail_delete_post);

// GET request to update Cocktail.
router.get("/cocktail/:id/update", cocktail_update_get);

// POST request to update Cocktail.
router.post("/cocktail/:id/update", cocktail_update_post);

// GET request for one Cocktail.
router.get("/cocktail/:id", cocktail_detail);

// GET request for list of all Cocktail items.
router.get("/cocktails", cocktail_list);

export default router;
