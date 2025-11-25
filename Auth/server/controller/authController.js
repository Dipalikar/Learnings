import { usernameExists } from "../middleware/checkUsername.js";
import toast from "react-hot-toast";
import sql from "../configs/db.js";

export const userAdd = async (req, res) => {
  try {
    const { username, full_name, password } = req.body;
    const exists = await usernameExists(username);

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }
    console.log(username, full_name, password);

    const result = await sql`
    INSERT INTO users (username, full_name, password_hash)
    VALUES (${username}, ${full_name}, ${password})
    RETURNING id, username, full_name;
  `;
    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
