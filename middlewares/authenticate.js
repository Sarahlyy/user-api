import jwt from "jsonwebtoken"




export const authenticateUser = (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the user ID and email to the request object for further processing
    req.userId = decoded.userId;
    req.email = decoded.email;

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

