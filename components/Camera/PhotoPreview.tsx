import React from "react";
import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CameraButtonStyle } from "./CameraButton/CameraButton.style";
import { Image } from "expo-image";

/**
 * Componente que muestra una vista previa de la foto capturada y un botón para volver a tomarla.
 *
 * @component
 */
const PhotoPreview: React.FC<{
  photoUri: string | null;
  styleCamerPreview?: any;
}> = ({ photoUri, styleCamerPreview }) => (
  <View>
    <Image
      source={{ uri: photoUri }}
      style={[CameraButtonStyle.image, styleCamerPreview]}
      contentFit={"scale-down"}
    />
  </View>
);
export default PhotoPreview;
