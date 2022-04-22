import { IResolvers } from "@graphql-tools/utils";

import { addPost, getAllPosts, getPostById } from "../../modules/post.module";
import { getUserById } from "../../modules/user.module";
import { verifyUser } from "../../utils/auth.utils";

export const resolvers: IResolvers = {
  Mutation: {
    // Auth required - Add post for logged in user
    async addPost(_, args, context) {
      const user = await verifyUser(context.req.headers.authorization);

      return addPost({ ...args.details, postedBy: user._id });
    }
  },

  Query: {
    post(_, args) {
      return getPostById(args.id);
    },

    posts(_, args) {
      return getAllPosts(args);
    },

    // Auth required - Get all posts by logged in user
    async getAllUserPosts(_, args, context) {
      const user = await verifyUser(context.req.headers.authorization);
      return getAllPosts({ ...args, postedBy: user._id });
    }
  },

  Post: {
    postedBy(parent) {
      return getUserById(parent.postedBy);
    }
  }
};
