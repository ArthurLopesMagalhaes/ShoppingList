import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 22,
  },
  container: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary80,
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.medium,
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
  trashContainer: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.heading,
  },
});
