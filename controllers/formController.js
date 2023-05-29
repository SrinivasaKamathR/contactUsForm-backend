const User = require("../models/user");

exports.contactForm = async (req, res, next) => {
  try {
    const user = await User.create({
      enteredName: req.body.enteredName,
      enteredEmail: req.body.enteredEmail,
      enteredPhone: req.body.enteredPhone,
    });
    res.status(200).json({ newuser: user });
  } catch (error) {
    res.status(504).json({ error: error });
  }
};
