import express from "express";

const router = express.Router();

import { createPost, getPosts, updatePost, deletePost } from "../controllers/postController.js";

router.post("/create", createPost);
router.get("/getPost", getPosts);
router.put("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;