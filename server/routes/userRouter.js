import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/self", isAuthenticated, myProfile);
router.post("/register", register);

export default router;