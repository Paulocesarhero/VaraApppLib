import { StyleSheet } from "react-native";

export const CameraButtonStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },

  button: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    height: 40,
    width: 40,
  },
});
