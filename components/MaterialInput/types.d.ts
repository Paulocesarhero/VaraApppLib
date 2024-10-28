import { TextInputProps } from "react-native";

/**
 * Propiedades para el componente MaterialInput.
 *
 * @interface MaterialInputProps
 * @extends {TextInputProps}
 */
export interface MaterialInputProps extends TextInputProps {
  /**
   * La etiqueta que se muestra encima del campo de entrada.
   */
  label: string;

  /**
   * El texto de marcador de posición que se muestra cuando el campo está vacío.
   */
  placeholder: string;

  /**
   * Indica si el campo de entrada es obligatorio.
   * Es opcional y, por defecto, se establece en `true`.
   */
  isRequired?: boolean;

  /**
   * El nombre del ícono que se muestra dentro del campo de entrada.
   * Es opcional y, por defecto, se establece en `"person"`.
   */
  iconName?: string;

  /**
   * La familia de íconos a utilizar en el campo de entrada.
   * Puede ser `"Ionicons"` o `"Entypo"`. Es opcional y, por defecto, se establece en `"Ionicons"`.
   */
  iconFamily?: "Ionicons" | "Entypo";

  /**
   * Función que se llama cuando el texto en el campo de entrada cambia.
   *
   * @param text - El nuevo texto ingresado.
   */
  onTextChange: (text: string) => void;
}
