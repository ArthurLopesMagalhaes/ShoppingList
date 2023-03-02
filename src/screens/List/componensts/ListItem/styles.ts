import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 14,
    marginBottom: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary80,
  },
  text: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.medium,
    flex: 1,
  },
  checked: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.primary80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary70,
    marginLeft: 12,
  },
  unhecked: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary70,
    marginLeft: 12,
  },
});
