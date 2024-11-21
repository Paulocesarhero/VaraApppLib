import CameraButton from "./CameraButton/CameraButton";
import { View } from "react-native";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Camera",
  component: CameraButton,
  parameters: {
    docs: {
      description: {
        component: "Este componente abre una camara",
      },
    },
  },
};
export const Basic = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <CameraButton
        sizeButton={50}
        photoUri={photo}
        setPhotoUri={(uri: string | null) => {
          action("setPhotoUri")(uri);
          setPhoto(uri);
          console.log(photo);
        }}
      />
    </View>
  );
};
