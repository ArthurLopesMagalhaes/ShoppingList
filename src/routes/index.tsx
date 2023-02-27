import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stacks.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
