import express from "express";
import { login, register } from "../controllers/auth.js";
import upload from "../uploadSetup.js";

const router = express.Router();

// ROUTES WITH UPLOAD FUNCTIONALITY
router.post("/register", upload.single("picture"), register);
router.post("/login", login);


export default router;
