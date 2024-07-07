import { userModel } from "../models/user.js";
import jwt from "jsonwebtoken"


//placed const secret key in .env


export const postLogin = ('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT for the authenticated user
    const token = jwt.sign({ userId: username._id, email: user.email }, secretKey, {
      expiresIn: '1h', // Token will expire in 1 hour
    });
    console.log(token)
    return res.status(200).json({ token });

  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});
