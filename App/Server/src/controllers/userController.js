import User from "../models/user";

// Display list of all Authors.
export function user_list(req, res) {
  User.find((err, users) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting user.",
        error: err
      });
    }
    return res.json(users);
  });
}

// Display detail page for a specific User.
export function user_detail(req, res) {
  const id = req.params.id;
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting user.",
        error: err
      });
    }
    if (!user) {
      return res.status(404).json({
        message: "No such user"
      });
    }
    return res.json(user);
  });
}

// Display User create form on GET.
export function user_create_get(req, res) {
  res.send("NOT IMPLEMENTED: User create GET");
}

// Handle User create on POST.
export function user_create_post(req, res) {
  //    res.send('NOT IMPLEMENTED: User create POST');
  const user = new User({
    email: req.body.email,
    passwordHash: req.body.passwordHash,
    role: req.body.role
  });
  user.save((err, user) => {
    if (err) {
      return res.status(501).json({
        message: "Error saving user",
        error: err
      });
    }
    return res.status(201).json({
      message: "success save",
      _id: user._id
    });
  });

  //  res.send('NOT IMPLEMENTED: User create POST');
}

// Display User update form on GET.
export function user_update_get(req, res) {
  res.send("NOT IMPLEMENTED: User update GET");
}

// Handle User update on POST.
export function user_update_post(req, res) {
  const id = req.params.id;
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting user",
        error: err
      });
    }
    if (!user) {
      return res.status(404).json({
        message: "No such user"
      });
    }

    user.passwordHash = req.body.passwordHash
      ? req.body.passwordHash
      : user.passwordHash;
    user.role = req.body.role ? req.body.role : user.role;

    user.save((err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Error when updating user.",
          error: err
        });
      }

      return res.json(user);
    });
  });
}

// Display User delete form on GET.
export function user_delete_get(req, res) {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting the user.",
        error: err
      });
    }
    return res.status(204).json();
  });
}

// Handle User delete on POST.
export function user_delete_post(req, res) {
  res.send("NOT IMPLEMENTED: User delete POST");
}
