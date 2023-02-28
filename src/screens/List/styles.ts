import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
  },
  footer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: theme.colors.heading,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colors.heading,
    flex: 1,
    borderRadius: 8,
    fontSize: 15,
    paddingHorizontal: 8,
    fontFamily: theme.fonts.medium,
    backgroundColor: "white",
  },
  btnContainer: {
    width: 60,
    height: 45,
    borderRadius: 8,
    marginLeft: 20,
    backgroundColor: theme.colors.primary80,
    justifyContent: "center",
    alignItems: "center",
  },
});
