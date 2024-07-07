import { Router } from "express";
import { postUser } from "../controllers/signup.js";

const signUpRouter= Router();

// userRouter.get('/users', getUsers);


signUpRouter.post('/signup',postUser);



export default signUpRouter;