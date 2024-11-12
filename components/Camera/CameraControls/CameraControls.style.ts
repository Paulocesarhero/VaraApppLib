import { StyleSheet } from "react-native";

export const CameraControlsStyle = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 25,
    paddingVertical: 40,
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "flex-end",
    gap: 40,
  },
  takePictureContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
  },
});
