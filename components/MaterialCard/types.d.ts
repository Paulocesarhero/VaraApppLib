import { ReactNode } from "react";
import { PressableProps, StyleProp } from "react-native";

/**
 * Propiedades para el componente MaterialInput.
 *
 * @interface MaterialCardProps
 * @extends {PressableProps}
 */

export interface MaterialCardProps extends PressableProps {
  /**
   * La etiqueta que se muestra dentro del campo de entrada.
   */
  label: string;

  /**
   * Un ReactNode, este almacena cualquier componete por lo que se vuelve personalizable, este irá en el lado izquierdo dentro del MaterialCard .
   * Es opcional
   */
  leftComponent?: ReactNode;

  /**
   * Es donde se colocan todos los props de los estilos que llevará el viewStyle.
   */
  viewStyle?: StyleProp;
}
