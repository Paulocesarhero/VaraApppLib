/**
 * Propiedades para el componente DateSelector.
 *
 * @interface DateSelectorProps
 */

export interface DateSelectorProps {
  /**
   * La etiqueta que se muestra sobre el componente del selector de fecha.
   */
  label?: string;

  /**
   * Se ejecuta al seleccionar una nueva fecha en el selector de fecha.
   * Recibe como parámetro la fecha seleccionada.
   */
  onDateChange?: (date: Date) => void;

  value: Date;
}
