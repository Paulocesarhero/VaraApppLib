import {ColorValue, PressableProps, StyleProp, ViewStyle} from "react-native";
/**
 * Propiedades para el componente RoundedButton.
 *
 * @interface RoundedButtonProps
 * @extends {PressableProps}
 * @property {string | ColorValue} [color] - Color de fondo del botón.
 * @property {string} [text] - Texto que se mostrará dentro del botón.
 * @property {StyleProp<ViewStyle>} [style] - Estilos adicionales para el contenedor del botón.
 */
export interface RoundedButtonProps extends PressableProps {
  color?: string | ColorValue;
  text?: string;
  style?: StyleProp<ViewStyle>;
}
