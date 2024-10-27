import { LoginFormProps } from "../../../components/LoginForm/types";

/**
 * Propiedades para el componente `LoginPage`.
 *
 * Extiende las propiedades de `LoginFormProps`, lo que permite que `LoginPage`
 * reciba las propiedades necesarias para el formulario de inicio de sesión,
 * además de la función para manejar el evento de registro.
 *
 * @interface LoginPageProps
 * @extends LoginFormProps
 * @property {() => void} handleRegistroCientifico - Función que se llama cuando el usuario presiona el enlace para crear una cuenta.
 */
export interface LoginPageProps extends LoginFormProps {
  handleRegistroCientifico: () => void;
}
