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
