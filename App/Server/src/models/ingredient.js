import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  fullDescription: { type: String },
  quantity: { type: String, default: "1" },
  textColor: { type: String, default: "black" },
  bgColor: { type: String, default: "white" }
});

// Virtual for email URL
IngredientsSchema.virtual("url").get(function() {
  return `/api/ingredients/${this._id}`;
});

//Export model
export default mongoose.model("Ingredients", IngredientsSchema);
