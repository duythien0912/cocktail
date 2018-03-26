import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  cocktail: { type: Schema.ObjectId, ref: "CockTail", required: true },
  description: { type: String, default: "Update" }
});

// Virtual for email URL
CollectionSchema.virtual("url").get(function() {
  return `/api/collection/${this._id}`;
});

//Export model
export default mongoose.model("Collection", CollectionSchema);
