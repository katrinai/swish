const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grabSchema = new Schema(
  {
    _grabber: { type: Schema.Types.ObjectId, ref: "User" },
    _wish: { type: Schema.Types.ObjectId, ref: "Wish" }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Grab = mongoose.model("Grab", grabSchema);
module.exports = Grab;
