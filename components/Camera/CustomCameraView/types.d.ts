import { StyleProp, ViewStyle } from "react-native";

type CustomCameraViewProps = {
  onClose: () => void;
  CameraViewStyle?: StyleProp<ViewStyle>;
  setPhotoUri: (uri: string | null) => void;
  setPhotoBase64: (base64: string | null) => void;
};
