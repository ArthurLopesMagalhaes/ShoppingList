import { StyleSheet } from "react-native";
import { theme } from "../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: theme.colors.heading,
    textAlign: "center",
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
  footer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
});
