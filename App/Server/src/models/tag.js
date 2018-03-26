import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  color: { type: String, default: "black" },
  backgroundColor: { type: String, default: "white" }
});

// Virtual for email URL
TagsSchema.virtual("url").get(function() {
  return `/api/tags/${this._id}`;
});

//Export model
export default mongoose.model("Tags", TagsSchema);
