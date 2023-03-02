import React from "react";

import { StatusBar } from "react-native";
import { theme } from "./src/global/styles/theme";
import { MainRoutes } from "./src/routes";

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary100}
      />

      <MainRoutes />
    </>
  );
};

export default App;
