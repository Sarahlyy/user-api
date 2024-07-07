import express from "express"
import mongoose from "mongoose";
import signUpRouter from "./routes/signup.js";
import { authenticateUser } from "./middlewares/authenticate.js";
import loginRouter from "./routes/login.js";

//connection string
await mongoose.connect(process.env.MONGO_URI) 



const app =express();



// middleware
app.use (express.json());
app.use(signUpRouter);
app.use(loginRouter);
app.use(authenticateUser);







app.listen(8080,()=>{
    console.log("Live on 8080")
})

