import { IResolvers } from "@graphql-tools/utils";

import { addPost } from "../../modules/post.module";

export const resolvers: IResolvers = {
  Mutation: {
    addPost(_, details) {
      return addPost(details);
    }
  }
};
