import Product from "../module/product";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = (await Product.create(req.body)).save();
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id, { new: true });
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const addSizeByProduct = async (req, res) => {
  try {
    const priductId = req.params.id;
  } catch (error) {}
};
