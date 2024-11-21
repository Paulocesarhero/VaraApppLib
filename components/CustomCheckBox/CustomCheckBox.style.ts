import { StyleSheet } from "react-native";

export const CustomCheckBoxStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
