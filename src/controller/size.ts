import Size from "../module/size";

export const getAllSize = async (req, res) => {
  try {
    const data = await Size.find();
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const addSize = async (req, res) => {
  try {
    const data = await Size.create(req.body);
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const deleteSize = async (req, res) => {
  try {
    const data = await Size.findByIdAndDelete(req.params.id, { new: true });
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};
