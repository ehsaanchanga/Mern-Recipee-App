const User = require("../model/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const foundUser = await User.findOne({ userName }).exec();

  if (!foundUser) return res.sendStatus(401); // unauthorized

  //evaluate password
  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    // create jwt
    const accessToken = jwt.sign(
      { userName: foundUser.userName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1000s" }
    );

    res.json({ accessToken, userId: foundUser._id });
  } else {
    res.sendStatus(401); //unauthorized
  }
};

module.exports = { authenticateUser };
