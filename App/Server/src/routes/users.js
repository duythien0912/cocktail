import express from "express";
import User from "../models/user.js";
import parseErrors from "../utils/parseError";
import { sendConfirmationEmail } from "../mail/mailer";

// Require controller modules.
import user_controller from "../controllers/userController";

const router = express.Router();

router.post("/user", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({ email });
  user.setPassword(password);
  user.setConfirmationToken();
  user
    .save()
    .then(userRecord => {
      sendConfirmationEmail(userRecord);
      res.json({ user: userRecord.toAuthJson() });
    })
    .catch(err => res.status(401).json({ errors: parseErrors(err.errors) }));
});

/*
// GET request for creating a Cocktail. NOTE This must come before routes that display Cocktail (uses id).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating Cocktail.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete Cocktail.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete Cocktail.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update Cocktail.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update Cocktail.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one Cocktail.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all Cocktail items.
router.get('/users', user_controller.user_list);
*/

export default router;
