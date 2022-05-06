import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import cors from "cors";
import "reflect-metadata";

import schema from "./graphql";
import { initDB } from "./db/db.config";
import { AppSettings } from "./settings/app.settings";

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
  initDB();

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    context: async ({ req }) => ({
      req
    })
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  httpServer.listen({ port: AppSettings.PORT }, () => {
    console.log(
      `GraphQL Server listening at http://localhost:${AppSettings.PORT}/graphql`
    );
  });
}

startApolloServer(schema);
