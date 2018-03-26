import express from "express";
const router = express.Router();

// Require controller modules.
import {
  collection_create_get,
  collection_create_post,
  collection_delete_get,
  collection_delete_post,
  collection_update_get,
  collection_update_post,
  collection_detail,
  collection_list
} from "../controllers/collectionController";

// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get("/collection/create", collection_create_get);

// POST request for creating Cocktail.
router.post("/collection/create", collection_create_post);

// GET request to delete Cocktail.
router.get("/collection/:id/delete", collection_delete_get);

// POST request to delete Cocktail.
router.post("/collection/:id/delete", collection_delete_post);

// GET request to update Cocktail.
router.get("/collection/:id/update", collection_update_get);

// POST request to update Cocktail.
router.post("/collection/:id/update", collection_update_post);

// GET request for one Cocktail.
router.get("/collection/:id", collection_detail);

// GET request for list of all Cocktail items.
router.get("/collections", collection_list);

export default router;
