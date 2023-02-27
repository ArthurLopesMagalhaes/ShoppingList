import React from "react";

import { StatusBar } from "react-native";
import { MainRoutes } from "./src/routes";
import { Home } from "./src/screens/Home";
import { List } from "./src/screens/List";

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <MainRoutes />
    </>
  );
};

export default App;
