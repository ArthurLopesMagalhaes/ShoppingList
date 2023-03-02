import { ObjectSchema } from "realm";

export const ListSchema: ObjectSchema = {
  name: "List",
  properties: {
    _id: "int",
    name: "string",
    products: { type: "list", objectType: "Product" },
  },
  primaryKey: "_id",
};
