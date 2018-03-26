import Tag from "../models/tag";

// Display list of all Authors.
export const tag_list = (req, res) => {
  Tag.find((err, tags) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting tag.",
        error: err
      });
    }
    return res.json(tags);
  });
};

// Display detail page for a specific Tag.
export const tag_detail = (req, res) => {
  const id = req.params.id;
  Tag.findOne({ _id: id }, (err, tag) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting tag.",
        error: err
      });
    }
    if (!tag) {
      return res.status(404).json({
        message: "No such tag"
      });
    }
    return res.json(tag);
  });
};

// Display Tag create form on GET.
export const tag_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Tag create GET");
};

// Handle Tag create on POST.
export const tag_create_post = (req, res) => {
  //    res.send('NOT IMPLEMENTED: Tag create POST');
  const tag = new Tag({
    name: req.body.name,
    color: req.body.color,
    backgroundColor: req.body.backgroundColor
  });
  tag.save((err, tag) => {
    if (err) {
      return res.status(501).json({
        message: "Error saving tag",
        error: err
      });
    }
    return res.status(201).json({
      message: "success save",
      _id: tag._id
    });
  });
  //  res.send('NOT IMPLEMENTED: Tag create POST');
};

// Display Tag update form on GET.
export const tag_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Tag update GET");
};

// Handle Tag update on POST.
export const tag_update_post = (req, res) => {
  const id = req.params.id;
  Tag.findOne({ _id: id }, (err, tag) => {
    if (err) {
      return res.status(500).json({
        message: "Error when getting tag",
        error: err
      });
    }
    if (!tag) {
      return res.status(404).json({
        message: "No such tag"
      });
    }

    tag.name = req.body.name ? req.body.name : tag.name;
    tag.color = req.body.color ? req.body.color : tag.color;
    tag.backgroundColor = req.body.backgroundColor
      ? req.body.backgroundColor
      : tag.backgroundColor;

    tag.save((err, tag) => {
      if (err) {
        return res.status(500).json({
          message: "Error when updating tag.",
          error: err
        });
      }

      return res.json(tag);
    });
  });
};

// Display Tag delete form on GET.
export const tag_delete_get = (req, res) => {
  const id = req.params.id;
  Tag.findByIdAndRemove(id, (err, tag) => {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting the tag.",
        error: err
      });
    }
    return res.status(204).json();
  });
};

// Handle Tag delete on POST.
export const tag_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Tag delete POST");
};
