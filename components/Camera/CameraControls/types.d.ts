import { PressableProps } from "react-native";

export interface CustomCameraProps extends PressableProps {
  onToggleFacing: () => void;
  onClose: () => void;
  onTakePicture: () => void;
  onFlashPress: () => void;
  isFlashActive: string;
  facing: string;
  onIncreaseZoom: () => void;
  onDecreaseZoom: () => void;
  zoom: number;
  setZoom: (value: number) => void;
}
