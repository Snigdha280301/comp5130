import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please mention your name!"],
        minLength: [3, "Name must contain atleast 3 characters!"],
        maxLength: [30, "Name must not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email!"],
        unique: [true, "User is already registered!"],
        validate: [validator.isEmail, "Please provide a valid email!"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide your phone number!"],
    },
      password: {
        type: String,
        required: [true, "Please provide your password!"],
        minLength: [8, "Password must contain at least 8 characters!"],
        maxLength: [32, "Password cannot exceed 32 characters!"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
         url: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
  },
});
    


export const User = mongoose.model("User", userSchema);