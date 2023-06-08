import User from "../models/users_model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { user_name, no_telp, user_password, user_img } = req.body;

    // Lakukan validasi input atau pengolahan data lainnya sesuai kebutuhan

    const user = await User.create({
      user_name,
      no_telp,
      user_password,
      user_img,
    });

    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { user_name, no_telp, user_password, user_img } = req.body;

    // Lakukan validasi input atau pengolahan data lainnya sesuai kebutuhan

    const user = await User.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    if (user) {
      await User.update(
        { user_name, no_telp, user_password, user_img },
        {
          where: {
            user_id: req.params.id,
          },
        }
      );

      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    if (user) {
      await User.destroy({
        where: {
          user_id: req.params.id,
        },
      });

      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
