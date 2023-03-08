const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const duplicate = await User.findOne({ userName }).exec();
  if (duplicate) return res.sendStatus(409); // conflict

  try {
    // encrypt password

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName: userName,
      password: hashedPassword,
    });

    const response = await newUser.save();
    console.log(response);

    res.status(201).json({ message: "New user saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  handleNewUser,
};
