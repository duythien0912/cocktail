import express from "express";
const router = express.Router();

// Require controller modules.
import {
  auth,
  confirmation,
  reset_password_request,
  validate_token,
  reset_password
} from "../controllers/authController";

// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get("/auth", auth);

router.get("/auth/confirmation", confirmation);

router.get("/auth/reset_password_request", reset_password_request);

router.get("/auth/validate_token", validate_token);

router.get("/auth/reset_password", reset_password);

export default router;
