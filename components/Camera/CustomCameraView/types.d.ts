export type CustomCameraViewProps = {
  /**
   * Función que se ejecuta al cerrar la vista de la cámara.
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * Estilo personalizado opcional para la vista de la cámara.
   * @type {StyleProp<ViewStyle>}
   */
  CameraViewStyle?: StyleProp<ViewStyle>;

  /**
   * Función para establecer la URI de la foto tomada.
   * @param {string | null} uri - URI de la foto tomada, o null si no hay foto.
   * @type {(uri: string | null) => void}
   */
  setPhotoUri: (uri: string | null) => void;

  /**
   * Función para establecer la representación base64 de la foto tomada.
   * @param {string | null} base64 - Representación en base64 de la foto, o null si no hay foto.
   * @type {(base64: string | null) => void}
   */
  setPhotoBase64: (base64: string | null) => void;
};
