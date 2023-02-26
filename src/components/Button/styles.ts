import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 14,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    color: theme.colors.heading,
  },
});
