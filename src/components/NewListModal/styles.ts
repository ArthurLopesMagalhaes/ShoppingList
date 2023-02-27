import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    width: "80%",
    backgroundColor: theme.colors.heading,
    borderRadius: 14,
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    marginBottom: 24,
    borderRadius: 8,
    fontSize: 15,
    paddingHorizontal: 8,
    fontFamily: theme.fonts.medium,
  },
});
