import sql from "../configs/db.js";

export const userAdd = async (req, res) => {
  try {
    const { username, full_name, password } = req.body;
    console.log(username, full_name, password);
    return res.json({
      success: true,
      message: "User data received successfully",
      data: {
        username,
        full_name,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
