import { TextInputProps } from "react-native";

/**
 * Propiedades para el componente de entrada de contraseña (`PasswordInput`).
 *
 * Esta interfaz extiende las propiedades predeterminadas de `TextInput` en React Native, lo que permite
 * que el componente `PasswordInput` herede todas las propiedades estándar para campos de entrada de texto,
 * además de proporcionar propiedades específicas para gestionar la entrada de contraseñas.
 *
 * @interface PasswordInputProps
 * @extends TextInputProps
 *
 * @property {string} [password] - La contraseña actual ingresada en el campo.
 * @property {(text: string) => void} [onPasswordChange] - Función opcional que se ejecuta cada vez que la contraseña cambia.
 */
export interface PasswordInputProps extends TextInputProps {
  /**
   * La contraseña actual ingresada en el campo.
   */
  password?: string;

  /**
   * Función que se llama cuando la contraseña cambia.
   *
   * @param {string} text - El nuevo texto de la contraseña.
   */
  onPasswordChange?: (text: string) => void;
}
