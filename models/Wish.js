const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema({
  name: String,
  picture: String,
  _owner: { type: Schema.Types.ObjectId, ref: 'User' },
  description: String,
  comment: String,
  "price-range": String,
  "end-date": String
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
