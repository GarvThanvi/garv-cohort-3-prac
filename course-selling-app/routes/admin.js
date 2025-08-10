import express from "express";
import Admin from "../models/adminSchema.js";

const adminMiddleware = async (req, res, next) => {
  
};

const router = express.Router();

router.post("/signin", (req, res) => {});
router.post("/signup", (req, res) => {});
router.post("/course", (req, res) => {});
router.put("/course", (req, res) => {});
router.get("/course/bulk", (req, res) => {});

export default router;
