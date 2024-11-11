import React from "react";
import { Image, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CameraButtonStyle } from "./CameraButton/CameraButton.style";

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
    />
    <Pressable onPress={onRetake}>
      <AntDesign name="camera" size={sizeButtonPhotoPreview} color="black" />
    </Pressable>
  </View>
);
export default PhotoPreview;
