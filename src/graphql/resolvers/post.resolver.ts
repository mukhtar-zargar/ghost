import { IResolvers } from "@graphql-tools/utils";

import { addPost, getAllPosts, getPostById } from "../../modules/post.module";
import { getUserById } from "../../modules/user.module";

export const resolvers: IResolvers = {
  Mutation: {
    addPost(_, details) {
      return addPost(details);
    }
  },
  Query: {
    post(_, args) {
      return getPostById(args.id);
    },
    posts(_, args) {
      return getAllPosts(args);
    }
  },
  Post: {
    postedBy(parent) {
      return getUserById(parent.postedBy);
    }
  }
};
