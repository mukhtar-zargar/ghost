import { IResolvers } from "@graphql-tools/utils";

import { addUser, getAllUsers, getUserById } from "../../modules/user.module";

export const resolvers: IResolvers = {
  Mutation: {
    addUser(_, args) {
      return addUser(args);
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
  //   User: {
  //     savedPosts() {

  //     }
  //   }
};
