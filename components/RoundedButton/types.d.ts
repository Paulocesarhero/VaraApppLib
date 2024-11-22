/**
 * Propiedades para el componente RoundedButton.
 *
 * @interface RoundedButtonProps
 */
export interface RoundedButtonProps {
  /**
   * Color de fondo del botón.
   * @type {string}
   */
  color: string;

  /**
   * Texto que se mostrará dentro del botón.
   * @type {string}
   */
  text: string;

  /**
   * Estilo adicional para el contenedor externo del botón.
   * @type {ViewStyle}
   * @optional
   */
  style?: ViewStyle;

  /**
   * Propiedad para mostrar un indicador de carga dentro del botón.
   * Si está en `true`, el botón muestra un ActivityIndicator en lugar del texto.
   * @type {boolean}
   * @default false
   */
  loading?: boolean;

  /**
   * Estado de deshabilitado del botón.
   * Si está en `true`, el botón estará deshabilitado y cambiará su apariencia.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean;

  /**
   * Nombre del icono que se mostrará junto al texto del botón.
   * Usa el nombre del icono de Ionicons.
   * @type {string}
   * @optional
   */
  iconName?: keyof typeof Ionicons.glyphMap;

  /**
   * Color del icono que se muestra dentro del botón.
   * @type {string}
   * @default "#fff"
   */
  iconColor?: string;

  /**
   * Tamaño de la fuente del texto y del icono (si existe).
   * @type {number}
   * @default 16
   */
  textSize?: number;

  /**
   * Radio de los bordes del botón.
   * @type {number}
   * @default 20
   */
  borderRadius?: number;

  /**
   * Función que se llama cuando el botón es presionado.
   * @type {() => void}
   */
  onPress: () => void;

  /**
   * Si el boton tiene box shadow o no.
   * @type {boolean}
   */
  boxShadow?: boolean;
}
