import { GraphQLFieldConfig, GraphQLID } from "graphql";
import UserType from "../type";

const user: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => {
    const user = { id: "34", age: 12, name: "APple" };
    return user;
  },
};

export default user;
