import {TextInputProps} from "react-native";

/**
 * Props para el componente PasswordInput.
 *
 * @interface PasswordInputProps
 * @extends {TextInputProps}
 *
 */
export interface PasswordInputProps extends TextInputProps {
    /**
     * La etiqueta que se mostrará para el campo de entrada de contraseña.
     *
     * @type {string}
     */
    label: string;

    /**
     * El texto de marcador de posición que se mostrará en el campo de entrada cuando esté vacío.
     *
     * @type {string}
     */
    placeholder: string;

    /**
     * Indica si el campo de contraseña es obligatorio.
     * Por defecto es false si no se proporciona.
     *
     * @type {boolean}
     * @optional
     */
    isRequired?: boolean;

    /**
     * El nombre del campo de contraseña, utilizado para el manejo del formulario con react-hook-form.
     *
     * @type {string}
     */
    name: string;

    /**
     * El objeto de control de react-hook-form para gestionar el estado del formulario.
     *
     * @type {Control<any>}
     */
    control: Control<any>;
}
