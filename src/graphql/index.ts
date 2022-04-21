import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { resolvers as authorResolver } from "./resolvers/author.resolver";
import { resolvers as bookResolver } from "./resolvers/book.resolver";
import { resolvers as userResolver } from "./resolvers/user.resolver";
import { resolvers as postResolver } from "./resolvers/post.resolver";
import * as baseQuery from "./schemas/base.graphql";
import * as booksQuery from "./schemas/book.graphql";
import * as authorQuery from "./schemas/author.graphql";
import * as userQuery from "./schemas/user.graphql";
import * as postQuery from "./schemas/post.graphql";

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [baseQuery, booksQuery, authorQuery, userQuery, postQuery],
  resolvers: merge(
    resolvers,
    bookResolver,
    authorResolver,
    userResolver,
    postResolver
  )
});

export default schema;
