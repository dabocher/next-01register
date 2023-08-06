import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: [true, "Username already exists"],
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [20, "Username must be less than 20 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "Password must be at least 8 characters"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exists"],
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address",
    ],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: {
    type: String,
    default: "",
  },
  forgotPasswordTokenExpiration: {
    type: Date,
    default: Date.now(),
  },
  verifyEmailToken: {
    type: String,
    default: "",
  },
  verifyEmailTokenExpiration: {
    type: Date,
    default: Date.now(),
  },
});

export const User = models.User || model("User", userSchema);
