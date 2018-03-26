import Collection from "../models/collection";

// Display list of all Authors.
export const collection_list = (req, res) => {
  Collection.find((err, collections) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting collection.",
        error: err
      });
    }
    return res.json(collections);
  });
};

// Display detail page for a specific Collection.
export const collection_detail = (req, res) => {
  const id = req.params.id;
  Collection.findOne({ _id: id }, (err, collection) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting collection.",
        error: err
      });
    }
    if (!collection) {
      return res.status(404).json({
        message: "No such collection"
      });
    }
    return res.json(collection);
  });
};

// Display Collection create form on GET.
export const collection_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Collection create GET");
};

// Handle Collection create on POST.
export const collection_create_post = (req, res) => {
  //    res.send('NOT IMPLEMENTED: Collection create POST');
  const collection = new Collection({
    cocktail: req.body.cocktail,
    description: req.body.description
  });
  collection.save((err, collection) => {
    if (err) {
      return res.status(501).json({
        message: "Error saving collection",
        error: err
      });
    }
    return res.status(201).json({
      message: "success save",
      _id: collection._id
    });
  });
  //  res.send('NOT IMPLEMENTED: Collection create POST');
};

// Display Collection update form on GET.
export const collection_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Collection update GET");
};

// Handle Collection update on POST.
export const collection_update_post = (req, res) => {
  const id = req.params.id;
  Collection.findOne({ _id: id }, (err, collection) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting collection",
        error: err
      });
    }
    if (!collection) {
      return res.status(404).json({
        message: "No such collection"
      });
    }

    collection.cocktail = req.body.cocktail
      ? req.body.cocktail
      : collection.cocktail;
    collection.description = req.body.description
      ? req.body.description
      : collection.description;

    collection.save((err, collection) => {
      if (err) {
        return res.status(500).json({
          message: "Error when updating collection.",
          error: err
        });
      }

      return res.json(collection);
    });
  });
};

// Display Collection delete form on GET.
export const collection_delete_get = (req, res) => {
  const id = req.params.id;
  Collection.findByIdAndRemove(id, (err, collection) => {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting the collection.",
        error: err
      });
    }
    return res.status(204).json();
  });
};

// Handle Collection delete on POST.
export const collection_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Collection delete POST");
};
