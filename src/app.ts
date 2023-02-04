import express from "express";
import { graphqlHTTP } from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import schema from "./schema";

const ENDPOINT = "/graphql";

const app = express();

app.use(ENDPOINT, graphqlHTTP({ schema }));

if (process.env.NODE_ENV !== "production") {
  app.get("/playground", expressPlayground({ endpoint: ENDPOINT }));
}

export default app;
