import { TextInputProps, StyleProp, TextStyle } from "react-native";

/**
 * Propiedades para el componente de entrada de correo electrónico (`EmailInput`).
 *
 * Esta interfaz extiende las propiedades predeterminadas de `TextInput` en React Native, lo que permite
 * que el componente `EmailInput` herede todas las propiedades estándar de un campo de entrada de texto,
 * y añade propiedades específicas para gestionar la entrada de correos electrónicos.
 *
 * @interface EmailInputProps
 * @extends TextInputProps
 *
 * @property {string} [email] - El correo electrónico actualmente ingresado en el campo.
 * @property {(text: string) => void} onEmailTextChange - Función que se ejecuta cuando el texto del correo electrónico cambia.
 * @property {StyleProp<TextStyle>} [emailCustomStyle] - Estilo personalizado opcional para el campo de entrada de correo electrónico.
 */
export interface EmailInputProps extends TextInputProps {
  /**
   * El correo electrónico actualmente ingresado en el campo.
   */
  email?: string;

  /**
   * Función que se llama cuando el texto del correo electrónico cambia.
   *
   * @param {string} text - El nuevo texto del correo electrónico.
   */
  onEmailTextChange: (text: string) => void;

  /**
   * Estilo personalizado opcional para el campo de entrada de correo electrónico.
   */
  emailCustomStyle?: StyleProp<TextStyle>;
}
