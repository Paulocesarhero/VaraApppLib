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
  const [photo, setPhoto] = useState<string | null>(null); // Inicializa con null y define el tipo

  return (
    <View style={{ flex: 1 }}>
      <CameraButton
        sizeButton={50}
        styleCamerPreview={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#fff",
          height: 250,
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
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
