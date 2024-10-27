import { TextInputProps } from "react-native";

export interface MaterialInputProps extends TextInputProps {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  iconName?: string;
  iconFamily?: "Ionicons" | "Entypo";
  onTextChange: (text: string) => void;
}
