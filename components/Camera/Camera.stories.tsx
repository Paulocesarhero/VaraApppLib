import CameraButton from "./CameraButton/CameraButton";
import { View } from "react-native";

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
  return (
    <View style={{ flex: 1 }}>
      <CameraButton
        sizeButton={50}
        styleCamerPreview={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#fff",
          height: 250,
          width: 200,
          overflow: "hidden",
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></CameraButton>
    </View>
  );
};
