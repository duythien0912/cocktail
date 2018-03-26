import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CockTailSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.ObjectId, ref: "User", required: true },
  tags: [{ type: Schema.ObjectId, ref: "Tags" }],
  ingredients: [{ type: Schema.ObjectId, ref: "Ingredients" }],
  imageUrl: { type: String, required: true },
  backgroundUrl: { type: String }
});

// Virtual for book's URL
CockTailSchema.virtual("url").get(function() {
  return `/api/cocktail/${this._id}`;
});

//Export model
export default mongoose.model("CockTail", CockTailSchema);
