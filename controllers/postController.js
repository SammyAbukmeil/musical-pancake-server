const getAllPosts = (req, res) => {
  res.json({ message: "Got all posts" });
};

const addPost = (req, res) => {
  res.json({ message: "Added post" });
};

module.exports = {
  addPost,
  getAllPosts,
};
