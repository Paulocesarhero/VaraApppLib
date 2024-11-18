import { StyleSheet } from "react-native";

export const emailInputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
});
