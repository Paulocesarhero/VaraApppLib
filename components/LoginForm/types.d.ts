/**
 * Propiedades para el componente de LoginForm.
 *
 * @interface LoginFormProps
 */
export interface LoginFormProps {
  /**
   * El correo electrónico ingresado por el usuario.
   * Es opcional.
   */
  email?: string;

  /**
   * La contraseña ingresada por el usuario.
   * Es opcional.
   */
  password?: string;

  /**
   * Función que se llama cuando el correo electrónico cambia.
   *
   * @param text - El nuevo texto del correo electrónico.
   */
  onEmailChange: (text: string) => void;

  /**
   * Función que se llama cuando la contraseña cambia.
   *
   * @param text - El nuevo texto de la contraseña.
   */
  onPasswordChange: (text: string) => void;

  /**
   * Función que se llama cuando se presiona el botón de inicio de sesión.
   */
  onLoginPress: () => void;

  /**
   * Texto que se mostrará en el botón de inicio de sesión.
   * Es opcional y, por defecto, se establece en "Log in".
   */
  buttonText?: string;

  /**
   * Indica si el formulario está en estado de carga.
   * Es opcional y, por defecto, se establece en false.
   */
  loading?: boolean;
}
