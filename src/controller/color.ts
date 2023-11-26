import Color from "../module/color";

export const getAllColor = async (req, res) => {
  try {
    const data = await Color.find();
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const addColor = async (req, res) => {
  try {
    const data = (await Color.create(req.body));
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

export const deleteColor = async (req, res) => {
  try {
    const data = await Color.findByIdAndDelete(req.params.id, { new: true });
    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};
