const Post = require("../models/Post");

const getAllPosts = async (_req, res) => {
  try {
    const posts = await Post.query();

    res.json({ data: posts });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, message: "Couldn't contact the database" });
  }
};

const addPost = (req, res) => {
  res.json({ message: "Added post" });
};

module.exports = {
  addPost,
  getAllPosts,
};
