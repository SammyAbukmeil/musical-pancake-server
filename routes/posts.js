const express = require("express");
const router = express.Router();
const { addPost, getAllPosts } = require("../controllers/postController");

router.get("/", getAllPosts);
router.post("/", addPost);

module.exports = router;
