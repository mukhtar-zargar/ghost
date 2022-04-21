import { IResolvers } from "@graphql-tools/utils";

import { addUser } from "../../modules/user.module";

export const resolvers: IResolvers = {
  Mutation: {
    addUser(_, details) {
      return addUser(details);
    }
  }
};
