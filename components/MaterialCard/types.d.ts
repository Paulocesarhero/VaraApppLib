import { ReactNode } from "react";
import {PressableProps, ViewStyle} from "react-native";

/**
 * Propiedades para el componente MaterialInput.
 *
 * @interface MaterialCardProps
 * @extends {PressableProps}
 */

export interface MaterialCardProps extends PressableProps{
    /**
     * La etiqueta que se muestra dentro del campo de entrada.
     */
    label: string;

    /**
     * El ícono es personalizable, se requiere la familia y el nombre del ícono.
     * Es opcional
     */
    icon ?: ReactNode;

    /**
     * Es donde se coloca el código del color.
     */
    viewStyle ?: ViewStyle;

}

