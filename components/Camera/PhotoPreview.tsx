import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { CameraButtonStyle } from "./CameraButton/CameraButton.style";

const PhotoPreview: React.FC<{
  photoUri: string | null;
  styleCamerPreview?: any;
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
