import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema(
  {
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

export default mongoose.model("Sizes", sizeSchema);
