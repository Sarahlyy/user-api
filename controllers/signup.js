import { userModel } from "../models/user.js";
import bcrypt from "bcrypt"

// Replace this with a strong and secure key
export const postUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Check if password is provided
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // If the user does not exist, create a new user
        const newUser = new userModel({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        next(error);
    }
};

// export const postUser = async (req, res, next) => {
//     const { email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Check if password is provided
//         if (!password) {
//             return res.status(400).json({ message: "Password is required" });
//         }

//         // Hash the password using bcrypt
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // If the user does not exist, create a new user
//         const newUser = new userModel({ email, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: "User created successfully" });

//     } catch (error) {
//         next(error);
//     }
// };

// export const postUser = async (req, res, next) => {
//     const { email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Hash the password using bcrypt
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // If the user does not exist, create a new user
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: "User created successfully" });

//     } catch (error) {
//         next(error);
//     }
// };













