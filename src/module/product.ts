import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    productChild: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
