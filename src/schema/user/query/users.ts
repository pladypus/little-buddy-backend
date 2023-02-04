import { GraphQLFieldConfig, GraphQLList } from "graphql";
import UserType from "../type";

const users: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(UserType),
  resolve: (parent, args) => {
    const users = [
      { id: "34", age: 12, name: "APple" },
      { id: "34", age: 12, name: "Cake" },
    ];
    return users;
  },
};

export default users;
