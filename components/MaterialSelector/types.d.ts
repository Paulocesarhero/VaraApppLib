/**
 * Representa un estado con valores asociados para mostrar al usuario y enviar a la API.
 *
 * @interface Estado
 */
export interface Estado {
  /**
   * Identificador único del estado.
   *
   * @type {string}
   */
  id: string;

  /**
   * Texto que se muestra al usuario.
   *
   * @type {string}
   */
  label: string;

  /**
   * Valor que se enviará a la API al seleccionar este estado. Generalmente, este valor debe ser un número entero.
   * @type {string}
   */
  apiValue: string;
}

/**
 * Propiedades para el componente EstadoSelector.
 *
 * @interface EstadoSelectorProps
 */
export interface EstadoSelectorProps {
  /**
   * Etiqueta que describe el propósito del selector.
   *
   * @type {string}
   */
  label: string;

  /**
   * Lista de estados disponibles para seleccionar.
   *
   * @type {Estado[]}
   */
  estados: Estado[];

  /**
   * Función que se llama cuando el usuario selecciona un estado.
   * Recibe el valor `apiValue` del estado seleccionado.
   *
   * @param {string} estado - El valor `apiValue` del estado seleccionado.
   */
  onEstadoChange: (estado: string) => void;

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
   * Representa el valor asociado al input.
   * Puede ser de cualquier tipo, dependiendo del uso del componente.
   * El valor debe coincidir con el apivalue para que funcione correctamente
   *
   * @type {any}
   */
  value: any;
}
