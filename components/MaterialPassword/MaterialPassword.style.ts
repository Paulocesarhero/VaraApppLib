import { StyleSheet } from "react-native";

export const MaterialPasswordStyle = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    boxShadow: "5px 5px 5px #000",
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
  },
  helperText: {
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
  },
  errorText: {
    fontSize: 14,
    color: "#8B0000",
    marginTop: 5,
  },
});
