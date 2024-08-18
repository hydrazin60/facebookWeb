import express from "express";
import {
  getOwnProfile,
  getProfile,
  Login,
  Logout,
  Register,
  updateProfile,
} from "../controllers/userAuth.controllers.js";
import upload from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const UserAuthRouter = express.Router();
UserAuthRouter.post(
  "/register",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "coverPic", maxCount: 1 },
  ]),
  Register
);
UserAuthRouter.post("/login", Login);
UserAuthRouter.get("/logout", Logout);
UserAuthRouter.get("/profile-view/:id", isAuthenticated, getProfile);
UserAuthRouter.get("/view_own-profile", isAuthenticated, getOwnProfile);
UserAuthRouter.put(
  "/update/Profile",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "coverPic", maxCount: 1 },
  ]),
  isAuthenticated,
  updateProfile
);
export default UserAuthRouter;
