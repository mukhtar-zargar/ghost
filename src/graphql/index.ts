import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";

import { resolvers as authorResolver } from "./resolvers/authorResolver";
import { resolvers as bookResolver } from "./resolvers/bookResolver";
import * as booksQuery from "./schemas/book.graphql";
import * as authorQuery from "./schemas/author.graphql";

const query = `
    type Query {
        _empty: String
    }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [query, booksQuery, authorQuery],
  resolvers: merge(resolvers, bookResolver, authorResolver)
});

export default schema;
