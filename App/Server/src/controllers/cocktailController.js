import Cocktail from "../models/cocktail";

export const index = (req, res) => {
  res.send("This is api pages");
};

// Display list of all Authors.
export const cocktail_list = (req, res) => {
  Cocktail.find((err, cocktails) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting cocktail.",
        error: err
      });
    }
    return res.json(cocktails);
  });
};

// Display detail page for a specific Cocktail.
export const cocktail_detail = (req, res) => {
  const id = req.params.id;
  Cocktail.findOne({ _id: id }, (err, cocktail) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting cocktail.",
        error: err
      });
    }
    if (!cocktail) {
      return res.status(404).json({
        message: "No such cocktail"
      });
    }
    return res.json(cocktail);
  });
};

// Display Cocktail create form on GET.
export const cocktail_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Cocktail create GET");
};

// Handle Cocktail create on POST.
export const cocktail_create_post = (req, res) => {
  //    res.send('NOT IMPLEMENTED: Cocktail create POST');
  const cocktail = new Cocktail({
    name: req.body.name,
    user: req.body.user,
    tags: req.body.tags,
    ingredients: req.body.ingredients,
    imageUrl: req.body.imageUrl,
    backgroundUrl: req.body.backgroundUrl
  });
  cocktail.save((err, cocktail) => {
    if (err) {
      return res.status(501).json({
        message: "Error saving cocktail",
        error: err
      });
    }
    return res.status(201).json({
      message: "success save",
      _id: cocktail._id
    });
  });
  //  res.send('NOT IMPLEMENTED: Cocktail create POST');
};

// Display Cocktail update form on GET.
export const cocktail_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Cocktail update GET");
};

// Handle Cocktail update on POST.
export const cocktail_update_post = (req, res) => {
  const id = req.params.id;
  Cocktail.findOne({ _id: id }, (err, cocktail) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting cocktail",
        error: err
      });
    }
    if (!cocktail) {
      return res.status(404).json({
        message: "No such cocktail"
      });
    }

    cocktail.name = req.body.name ? req.body.name : cocktail.name;
    cocktail.user = req.body.user ? req.body.user : cocktail.user;
    cocktail.tags = req.body.tags ? req.body.tags : cocktail.tags;
    cocktail.ingredients = req.body.ingredients
      ? req.body.ingredients
      : cocktail.ingredients;
    cocktail.imageUrl = req.body.imageUrl
      ? req.body.imageUrl
      : cocktail.imageUrl;
    cocktail.backgroundUrl = req.body.backgroundUrl
      ? req.body.backgroundUrl
      : cocktail.backgroundUrl;

    cocktail.save((err, cocktail) => {
      if (err) {
        return res.status(500).json({
          message: "Error when updating cocktail.",
          error: err
        });
      }

      return res.json(cocktail);
    });
  });
};

// Display Cocktail delete form on GET.
export const cocktail_delete_get = (req, res) => {
  const id = req.params.id;
  Cocktail.findByIdAndRemove(id, (err, cocktail) => {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting the cocktail.",
        error: err
      });
    }
    return res.status(204).json();
  });
};

// Handle Cocktail delete on POST.
export const cocktail_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Cocktail delete POST");
};
