import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    boxShadow: "5px 5px 5px #000",
    height: 50,

  },
  dateText: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
});
