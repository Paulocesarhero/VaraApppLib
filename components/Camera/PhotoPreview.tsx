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
  photoUri: string;
  sizeButtonPhotoPreview?: number;
  styleCamerPreview?: any;
  onRetake: () => void;
}> = ({ photoUri, sizeButtonPhotoPreview, styleCamerPreview, onRetake }) => (
  <View>
    <Image
      source={{ uri: photoUri }}
      style={[CameraButtonStyle.image, styleCamerPreview]}
      contentFit={"scale-down"}
    />
    <Pressable onPress={onRetake}>
      <AntDesign name="camera" size={sizeButtonPhotoPreview} color="black" />
    </Pressable>
  </View>
);
export default PhotoPreview;
