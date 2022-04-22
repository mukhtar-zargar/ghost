import { IResolvers } from "@graphql-tools/utils";

import {
  addUser,
  getAllUsers,
  getUserById,
  savePost
} from "../../modules/user.module";

export const resolvers: IResolvers = {
  Mutation: {
    addUser(_, args) {
      return addUser(args);
    },
    savePost(_, args) {
      return savePost(args);
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
