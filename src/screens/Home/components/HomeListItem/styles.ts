import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.tertiary,
    height: 100,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.medium,
  },
});
