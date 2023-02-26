import configLogger from "@logger";
import { GraphQLClient } from "graphql-request";
import awsmobile from "./src/aws-exports";

configLogger();

export const client = new GraphQLClient(awsmobile.aws_appsync_graphqlEndpoint, {
  headers: { "x-api-key": awsmobile.aws_appsync_apiKey },
});
