const { Model } = require("objection");
const knex = require("knex")(require("../knexfile.js").development);
Model.knex(knex);

class Post extends Model {
  static get tableName() {
    return "posts";
  }
}

module.exports = Post;
