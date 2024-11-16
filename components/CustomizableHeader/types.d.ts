import { StyleProp, ViewStyle } from "react-native";
import { ReactNode } from "react";

/**
 * Propiedades para el componente `CustomizableHeader`.
 * Define el estilo del contenedor y los componentes a renderizar
 * en las posiciones izquierda, central y derecha del encabezado.
 */
export interface CustomizableHeaderProps {
  /**
   * Estilo personalizado para el contenedor del encabezado.
   *
   * @type {StyleProp<ViewStyle>}
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Componente a renderizar en el lado izquierdo del encabezado.
   *
   * @type {ReactNode}
   */
  leftComponent?: ReactNode;

  /**
   * Componente a renderizar en el centro del encabezado.
   *
   * @type {ReactNode}
   */
  centerComponent?: ReactNode;

  /**
   * Componente a renderizar en el lado derecho del encabezado.
   *
   * @type {ReactNode}
   */
  rightComponent?: ReactNode;
}
