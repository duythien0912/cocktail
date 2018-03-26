import express from "express";

// Require controller modules.
import {
  tag_create_get,
  tag_create_post,
  tag_delete_get,
  tag_delete_post,
  tag_update_get,
  tag_update_post,
  tag_detail,
  tag_list
} from "../controllers/tagController";
import authenticate from "../middlewares/authenticate";

const router = express.Router();
//router.use(authenticate);
// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get("/tag/create", tag_create_get);

// POST request for creating Cocktail.
router.post("/tag/create", tag_create_post);

// GET request to delete Cocktail.
router.get("/tag/:id/delete", tag_delete_get);

// POST request to delete Cocktail.
router.post("/tag/:id/delete", tag_delete_post);

// GET request to update Cocktail.
router.get("/tag/:id/update", tag_update_get);

// POST request to update Cocktail.
router.post("/tag/:id/update", tag_update_post);

// GET request for one Cocktail.
router.get("/tag/:id", tag_detail);

// GET request for list of all Cocktail items.
router.get("/tags", tag_list);

export default router;
