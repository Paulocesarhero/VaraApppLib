export interface InformacionPersonalFormProps {
  /**
   * Función que se ejecuta al enviar el formulario, recibiendo los valores del formulario como argumento.
   * @param data - Los datos del formulario enviados.
   */
  onSubmitData: (data: FormValues) => void;

  /**
   * Indica si el formulario está en estado de carga.
   */
  loading: boolean;

  /**
   * Función para actualizar el estado de carga del formulario.
   * @param loading - Un valor booleano que representa el nuevo estado de carga.
   */
  setLoading: (loading: boolean) => void;
  reactNodeButton?: React.ReactNode;
}

/**
 * Interface que representa los valores del formulario para registrar un científico.
 */
export interface FormValues {
  Contraseña: string;
  CorreoElectronico: string;
  Estado: string;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Institucion: string;
  TelefonoMovil: string;
  TelefonoFijo: string;
  Ciudad: string;
  Calle: string;
  CodigoPostal: string;
}
