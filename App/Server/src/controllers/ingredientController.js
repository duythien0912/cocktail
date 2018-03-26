import Ingredient from "../models/ingredient";

// Display list of all Authors.
export const ingredient_list = (req, res) => {
  Ingredient.find((err, ingredients) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting ingredient.",
        error: err
      });
    }
    return res.json(ingredients);
  });
};

// Display detail page for a specific Ingredient.
export const ingredient_detail = (req, res) => {
  const id = req.params.id;
  Ingredient.findOne({ _id: id }, (err, ingredient) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting ingredient.",
        error: err
      });
    }
    if (!ingredient) {
      return res.status(404).json({
        message: "No such ingredient"
      });
    }
    return res.json(ingredient);
  });
};

// Display Ingredient create form on GET.
export const ingredient_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Ingredient create GET");
};

// Handle Ingredient create on POST.
export const ingredient_create_post = (req, res) => {
  //    res.send('NOT IMPLEMENTED: Ingredient create POST');
  const ingredient = new Ingredient({
    fullDescription: req.body.fullDescription,
    quantity: req.body.quantity,
    textColor: req.body.textColor,
    bgColor: req.body.bgColor
  });
  ingredient.save((err, ingredient) => {
    if (err) {
      return res.status(501).json({
        message: "Error saving ingredient",
        error: err
      });
    }
    return res.status(201).json({
      message: "success save",
      _id: ingredient._id
    });
  });
  //  res.send('NOT IMPLEMENTED: Ingredient create POST');
};

// Display Ingredient update form on GET.
export const ingredient_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Ingredient update GET");
};

// Handle Ingredient update on POST.
export const ingredient_update_post = (req, res) => {
  const id = req.params.id;
  Ingredient.findOne({ _id: id }, (err, ingredient) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting ingredient",
        error: err
      });
    }
    if (!ingredient) {
      return res.status(404).json({
        message: "No such ingredient"
      });
    }

    ingredient.fullDescription = req.body.fullDescription
      ? req.body.fullDescription
      : ingredient.fullDescription;
    ingredient.quantity = req.body.quantity
      ? req.body.quantity
      : ingredient.quantity;
    ingredient.textColor = req.body.textColor
      ? req.body.textColor
      : ingredient.textColor;
    ingredient.bgColor = req.body.bgColor
      ? req.body.bgColor
      : ingredient.bgColor;

    ingredient.save((err, ingredient) => {
      if (err) {
        return res.status(500).json({
          message: "Error when updating ingredient.",
          error: err
        });
      }

      return res.json(ingredient);
    });
  });
};

// Display Ingredient delete form on GET.
export const ingredient_delete_get = (req, res) => {
  const id = req.params.id;
  Ingredient.findByIdAndRemove(id, (err, ingredient) => {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting the ingredient.",
        error: err
      });
    }
    return res.status(204).json();
  });
};

// Handle Ingredient delete on POST.
export const ingredient_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Ingredient delete POST");
};
