import { StyleSheet } from "react-native";

export const MaterialInputStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
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
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#4A0404",
  },
  helperText: {
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
  },
});
