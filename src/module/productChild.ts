import mongoose from "mongoose";

const productChild = new mongoose.Schema(
  {
    productChildname: {
      type: String,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
    color: {
      type: mongoose.Types.ObjectId,
      ref: "Colors",
    },
    size: {
      type: mongoose.Types.ObjectId,
      ref: "Sizes",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductsChild", productChild);
