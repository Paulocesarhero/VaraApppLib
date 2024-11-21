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
   * URI de la foto capturada.
   *
   * Si no se ha capturado ninguna foto, el valor será `null`.
   *
   * @type {string | null}
   */
  photoUri: string | null;

  /**
   * Función para actualizar la URI de la foto capturada.
   *
   * Se pasa una cadena con la URI de la foto o `null` si no hay foto.
   *
   * @param {string | null} uri - La URI de la foto capturada o `null`.
   * @returns {void}
   */
  setPhotoUri: (uri: string | null) => void;
}
