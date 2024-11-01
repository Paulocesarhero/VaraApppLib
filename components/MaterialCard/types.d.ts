import { ReactNode } from "react";
import {PressableProps, ViewStyle} from "react-native";
export interface MaterialCardProps extends PressableProps{
    label: string;
    icon ?: ReactNode;
    viewStyle ?: ViewStyle;
}

