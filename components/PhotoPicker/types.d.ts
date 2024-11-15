/**
 * Propiedades para el componente PhotoPicker.
 *
 * @interface PhotoPickerProps
 */
export interface PhotoPickerProps {
  /**
   * Etiqueta que describe el propósito del selector.
   *
   * @type {string}
   */
  label?: string;

  /**
   * Función que se llama cuando el usuario selecciona una foto.
   *
   * @param {string} uri - La URI de la foto seleccionada.
   */
  onPhotoSelect: (uri: string) => void;

  /**
   * Estilo personalizado para el botón.
   */
  buttonStyle?: object;

  /**
   * Estilo personalizado para la etiqueta.
   */
  labelStyle?: object;
}

export enum MediaTypeOptions {
  All = "All",
  Videos = "Videos",
  Images = "Images",
}
