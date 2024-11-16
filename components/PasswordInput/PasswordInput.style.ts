import { StyleSheet } from "react-native";

export const PasswordInputStyle = StyleSheet.create({
  container: {
    flexDirection: "row", // Coloca el icono y el texto en una fila
    alignItems: "center", // Centra verticalmente el contenido
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  input: {
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
