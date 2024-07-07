import { Schema, model} from "mongoose";
import {toJSON} from '@reis/mongoose-to-json'


const userSchema =new Schema({
    username:{type: "String",unique:true},
    email: {type:"String",required:true},
    password:{type:"String",required:true }
},{
    timestamps:true
});



userSchema.plugin(toJSON)
 export const userModel =model("User",userSchema)
