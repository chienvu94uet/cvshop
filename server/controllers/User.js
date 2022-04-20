const User = require("../models/User");

const login = (req, res) => {};
const register = (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = User.findOne({ email });

    if (userExists) {
      return res.status(400).json([
        {
          msg: "User is already exist",
        },
      ]);
    }

    try {
      const newUser = User.create({
        name,
        emai,
        password,
      });

      return res.status(201).json([
        {
          user: newUser,
        },
      ]);
    } catch (error) {
      return res.status(500).json([
        {
          msg: error,
        },
      ]);
    }
  } catch (error) {
    return res.status(500).json([
      {
        msg: error,
      },
    ]);
  }
};

module.exports = {
  login,
  register,
};
