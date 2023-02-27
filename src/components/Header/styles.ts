import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    marginLeft: 32,
  },
});
