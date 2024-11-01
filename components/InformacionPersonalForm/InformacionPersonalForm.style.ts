import { StyleSheet } from "react-native";
import { COLORS } from "../../src/Constants/Colors";

export const InformacionPersonalFormStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100, // Añade espacio extra al final del contenido
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  }, title: {
    fontSize: 20,
    borderColor: "#000",
    borderRadius: 15,
    padding: 6,
    margin: 5,
    textAlign: "center",
  }
});
