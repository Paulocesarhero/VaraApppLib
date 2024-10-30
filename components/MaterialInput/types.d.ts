import {TextInputProps} from "react-native";
import {Control} from "react-hook-form";

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
   * Es opcional
   */
  placeholder?: string;

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
  onTextChange?: (text: string) => void;

  /**
   * El objeto de control de react-hook-form para gestionar el estado del formulario.
   *
   * @type {Control<any>}
   */
  control: Control<any>;

  /**
   * El nombre del campo del input, utilizado para el manejo del formulario con react-hook-form.
   *
   * @type {string}
   */
  nameInput: string;

  /**
   * Reglas de validación adicionales para el campo de entrada.
   * Estas reglas se combinan con la regla `isRequired` para aplicar validaciones
   * personalizadas al componente.
   *
   * @type {Object} validateRules - Un objeto que define las reglas de validación.
   * @property {Object} [minLength] - Define la longitud mínima permitida del campo.
   * @property {number} minLength.value - Valor mínimo de longitud.
   * @property {string} minLength.message - Mensaje de error si la longitud es menor que el mínimo.
   * @property {Object} [maxLength] - Define la longitud máxima permitida del campo.
   * @property {number} maxLength.value - Valor máximo de longitud.
   * @property {string} maxLength.message - Mensaje de error si la longitud supera el máximo.
   * @property {Object} [pattern] - Expresión regular para la validación del campo.
   * @property {RegExp} pattern.value - Patrón regex a aplicar.
   * @property {string} pattern.message - Mensaje de error si el valor no coincide con el patrón.
   */
  validateRules?: object;

}
