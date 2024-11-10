const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const People = require('../model/user');

const loginfun = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) res.status(400).json({ error: "Null Values" });

  try {
    const user = await People.findOne({ name });

    if (!user) 
      return res.status(400).json({ error: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) 
      return res.status(400).json({ error: "Invalid credentials!" });

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
    
    res.status(200).json({ message: "Login successful", token });

  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
}

const signup = async (req, res) => {
  const { name, password, email, phone } = req.body;

  if (!name || !password || !email || !phone) 
    res.status(400).json({ error: "Null Values" });
  try {
    const existingEmail = await People.findOne({ email });

    if (existingEmail) 
      return res.status(400).json({ error: "Email already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new People({ name, password: hashedPassword, email, phone });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  }
  catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
}
module.exports = { loginfun, signup };
