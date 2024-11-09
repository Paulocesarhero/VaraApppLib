/**
 * Propiedades para el componente CustomCheckBox.
 *
 * @interface CustomCheckBoxProps
 */

export interface CustomCheckBoxProps {
  /**
   * La etiqueta que se muestra al lado derecho del checkBox.
   */
  label: string;

  /**
   * La propiedad que se vuelve true cuando se marca el componente y false cuando no está marcado.
   */
  isChecked: boolean;

  /**
   * Se ejecuta al hacer clic en el checkBox, alternando el estado entre marcado y no marcado.
   */
  onToggle: () => void;
}
