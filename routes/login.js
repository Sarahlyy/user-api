import { Router } from "express";
import { postLogin } from "../controllers/login.js";
import { authenticateUser } from "../middlewares/authenticate.js";

const loginRouter= Router();



loginRouter.post('/login',authenticateUser,postLogin);



export default loginRouter;