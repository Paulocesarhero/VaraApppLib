import { StyleSheet } from "react-native";

export const LoginFormStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    margin: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  image: {
    alignSelf: "center",
    width: "50%",
    height: "40%",
  },
  form: {
    paddingHorizontal: 20,
  },
});
