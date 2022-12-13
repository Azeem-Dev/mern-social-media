import { posts, users } from "./index.js";
import User from "../models/User.js";
import Post from "../models/Post.js";

const dataSeeder = async () => {
  const allUsers = await User.find();
  if (allUsers.length <= 0) {
    User.insertMany(users);
    Post.insertMany(posts);
  }
};
export default dataSeeder;
