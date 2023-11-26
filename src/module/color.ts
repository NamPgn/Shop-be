import mongoose from "mongoose";

const colorSchema = new mongoose.Schema(
  {
    nameColor:{
      type: String,
    },
    name: {
      type: String,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
  },

  { timestamps: true }
);

export default mongoose.model("Colors", colorSchema);
