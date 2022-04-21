import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";

import schema from "./graphql";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use("*", cors());

app.get("/", (_, res) => {
  res.json({
    author: "mukhtar",
    project: "ghost",
    description:
      "Test and implement - GraphQL/Apollo/Express/Typescript/MongoDb"
  });
});

async function startApolloServer(schema) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  httpServer.listen({ port }, () => {
    console.log(`GraphQL Server listening at http://localhost:${port}/graphql`);
  });
}

startApolloServer(schema);
