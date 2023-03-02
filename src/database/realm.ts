import Realm from "realm";
import { ListSchema } from "./schemas/List";
import { ProductSchema } from "./schemas/Product";

export const getRealm = async () =>
  await Realm.open({
    path: "shopping-list",
    schema: [ListSchema, ProductSchema],
    deleteRealmIfMigrationNeeded: true,
  });
