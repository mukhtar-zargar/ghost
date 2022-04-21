import { IResolvers } from "@graphql-tools/utils";

import { authors, books } from "../../dummyData";

export const resolvers: IResolvers = {
  Query: {
    book(_, args: any) {
      return books.find((book) => book.id === args.id);
    },
    books() {
      return books;
    }
  },
  Book: {
    author(parent) {
      return authors.find((author) => author.name === parent.author);
    }
  }
};
