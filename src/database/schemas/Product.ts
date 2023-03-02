import { ObjectSchema } from "realm";

export const ProductSchema: ObjectSchema = {
  name: "Product",
  embedded: true,
  properties: {
    _id: "int",
    name: "string",
    status: { type: "string", default: "open" },
  },
};
