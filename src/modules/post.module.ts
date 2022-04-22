import { ApolloError, UserInputError } from "apollo-server-core";

import { Post } from "../db/models/post.model";

export const addPost = async (args: any) => {
  const post = new Post(args.details);

  try {
    return await post.save();
  } catch (err) {
    throw new ApolloError("Internal Server Error");
  }
};

export const getPostById = async (id: string) => {
  try {
    const post = await Post.findById(id);
    if (!post) {
      throw new UserInputError("Invalid ID");
    }
    return post;
  } catch (err) {
    console.log("Error getPostById", err);
    throw err;
  }
};

export const getAllPosts = async ({ page = 1, pageSize = 10 }) => {
  try {
    if (page < 1) {
      page = 1;
    }
    const posts = await Post.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return posts;
  } catch (err) {
    console.log("Error getAllPosts", err);
    throw err;
  }
};
