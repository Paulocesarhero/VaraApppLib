import { Camera } from "expo-camera";
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
      <CameraButton></CameraButton>
    </View>
  );
};
