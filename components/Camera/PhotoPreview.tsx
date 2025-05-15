import React from "react";
import { StyleProp, View } from "react-native";
import { Image, ImageStyle } from "expo-image";
import { CameraButtonStyle } from "./CameraButton/CameraButton.style";

const PhotoPreview: React.FC<{
  photoUri?: string;
  styleCamerPreview?: StyleProp<ImageStyle>;
}> = ({ photoUri, styleCamerPreview }) => {
  return (
    <View>
      <Image
        source={{ uri: photoUri }}
        style={[CameraButtonStyle.image, styleCamerPreview]}
        contentFit={"scale-down"}
      />
    </View>
  );
};

export default PhotoPreview;
