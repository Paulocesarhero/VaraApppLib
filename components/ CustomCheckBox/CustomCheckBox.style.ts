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
  innerCheck: {
    width: 10,
    height: 10,
    transform: [{ rotate: "39deg" }],
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#fff",
    position: "absolute",
    bottom: 4,
    left: 5,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
