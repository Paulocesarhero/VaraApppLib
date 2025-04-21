import { StyleSheet } from "react-native";

export const PhotoPickerStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePreview: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
