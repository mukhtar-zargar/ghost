import { IResolvers } from "@graphql-tools/utils";

import {
  addUser,
  getAllUsers,
  getUserById,
  savePost,
  signup,
  login
} from "../../modules/user.module";
import { verifyUser } from "../../utils/auth.utils";

export const resolvers: IResolvers = {
  Mutation: {
    addUser(_, args) {
      return addUser(args);
    },

    // Auth required - Save a post for logged in user
    async savePost(_, args, context) {
      const user = await verifyUser(context.req.headers.authorization);

      return savePost({ postId: args.postId, userId: user._id });
    },

    signup(_, args) {
      return signup(args.details);
    },

    login(_, args) {
      return login(args.details);
    }
  },

  Query: {
    user(_, args) {
      return getUserById(args.id);
    },

    users(_, args) {
      return getAllUsers(args);
    }
  }
};
