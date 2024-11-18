import { StyleSheet } from "react-native";

export const PasswordInputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    overflow: "hidden",
    textAlign: "center",
    height: 50,
    fontSize: 20,
    paddingHorizontal: 10,
  },

  iconButton: {
    paddingRight: 10,
  },
});
