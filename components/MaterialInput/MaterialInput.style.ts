import { StyleSheet } from "react-native";

export const MaterialInputStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },
  helperText: {
    fontSize: 14,
    color: "#8B0000",
    marginTop: 5,
  },
});
