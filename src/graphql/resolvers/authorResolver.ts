import { IResolvers } from "@graphql-tools/utils";

import { authors, books } from "../../dummyData";

export const resolvers: IResolvers = {
  Query: {
    author(_, args: any) {
      return authors.find((author) => author.id === args.id);
    },
    authors() {
      return authors;
    }
  },
  Author: {
    books(parent) {
      return books.filter((book) => parent.books?.includes(book.id));
    }
  }
};
