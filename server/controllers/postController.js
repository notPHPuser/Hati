const { Post } = require('../models/post');

class PostController {
  async addPost(req, res) {
    const { title, body } = req.body;

    const post = await Post.create({ title, body });
    return res.json(post);
  }

  async getPost(req, res) {
    const post = await Post.findAll();
    return res.json(post);
  }
}

module.exports = new PostController();
