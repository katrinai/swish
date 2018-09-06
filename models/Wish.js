const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema(
  {
    name: String,
    picture: String,
    _owner: { type: Schema.Types.ObjectId, ref: "User" },
    description: String,
    comment: String,
    priceRange: String, //TODO:
    endDate: String,
    grabbed: { type: Boolean, default: false }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Wish = mongoose.model("Wish", wishSchema);
module.exports = Wish;
