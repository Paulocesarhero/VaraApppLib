import { ImageStyle, StyleProp } from "react-native";

/**
 * Propiedades para el componente `CameraButton`.
 *
 * @interface CameraButtonProps
 */
export interface CameraButtonProps {
  /**
   * Tamaño del ícono del botón de la cámara.
   *
   * @type {number}
   * @default 25
   */
  sizeButton?: number;

  /**
   * Estilos personalizados para la vista previa de la cámara.
   *
   * @type {StyleProp<ImageStyle>}
   * @default {}
   */
  styleCamerPreview?: StyleProp<ImageStyle>;
}
