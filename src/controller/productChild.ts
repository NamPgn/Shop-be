import product from "../module/product";
import productChild from "../module/productChild";

export const getProductChild = async (req, res) => {
  try {
    const data = await productChild
      .find()
      .populate("product")
      .populate("size")
      .populate("color");
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const addProductChill = async (req, res) => {
  try {
    const productId = req.params.id;
    const body = req.body;
    const data = await productChild.create(body);
    await product.findByIdAndUpdate(productId, { productChild: data._id });
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};
