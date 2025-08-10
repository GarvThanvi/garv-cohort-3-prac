import express from "express";
import User from "../models/userSchema.js";

const userMiddleware = async (req, res, next) => {
  
};

const router = express.Router();

router.post("/signin", (req, res) => {});
router.post("/signup", (req, res) => {
    
});
router.post("/purchases", (req, res) => {});

export default router;
