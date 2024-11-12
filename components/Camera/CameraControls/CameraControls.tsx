import React from "react";
import { Pressable, Text, View } from "react-native";
import { CustomCameraProps } from "./types";
import { CameraControlsStyle } from "./CameraControls.style";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

/**
 * Componente `CameraControls` para controlar las funcionalidades de la cámara,
 * incluyendo el flash, el zoom y la cámara frontal/trasera.
 *
 * @param {CustomCameraProps} props - Propiedades del componente.
 * @returns {React.FC} Un componente funcional de React para controles de cámara.
 */
const CameraControls: React.FC<CustomCameraProps> = ({
  onToggleFacing,
  onClose,
  onTakePicture,
  onFlashPress,
  isFlashActive,
  onDecreaseZoom,
  zoom,
  setZoom,
  onIncreaseZoom,
  facing,
}) => {
  const setZoomCero = () => {
    setZoom(0);
  };
  const setTotalZoom = () => {
    setZoom(1);
  };
  return (
    <View style={CameraControlsStyle.buttonContainer}>
      <Text style={{ color: "#fff", alignSelf: "center" }}>
        zoom: {(zoom * 100).toFixed(0)}%
      </Text>
      <Pressable onPress={onFlashPress}>
        <Entypo
          name="flash"
          size={30}
          color={isFlashActive === "on" ? "#ff0" : "#fff"}
        />
      </Pressable>
      <Pressable onPress={onToggleFacing}>
        <Text style={{ color: "#fff" }}>
          <Ionicons name="camera-reverse" size={30} />
        </Text>
      </Pressable>
      <Pressable onPress={onIncreaseZoom} onLongPress={setTotalZoom}>
        <Feather size={30} color={"#fff"} name="zoom-in" />
      </Pressable>
      <Pressable onPress={onDecreaseZoom} onLongPress={setZoomCero}>
        <Feather size={30} color={"#fff"} name="zoom-out" />
      </Pressable>
      <View style={CameraControlsStyle.takePictureContainer}>
        <Pressable onPress={onTakePicture}>
          <Entypo name="circle" size={80} style={{ color: "#fff" }} />
        </Pressable>
      </View>
    </View>
  );
};
export default CameraControls;
