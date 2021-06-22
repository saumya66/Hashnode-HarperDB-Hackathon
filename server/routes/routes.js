import express from "express";
import { getBlogsData } from "../controller/blog.js";

const router = express.Router();

router.use("/data", getBlogsData);

export default router;
