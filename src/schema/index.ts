import { GraphQLObjectType, GraphQLSchema } from "graphql";
import UserQueries from "./user/query";

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    ...UserQueries,
  },
});

export default new GraphQLSchema({ query: RootQuery });
