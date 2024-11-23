/**
 * Propiedades para el componente AvisoForm.
 *
 * @interface AvisoFormProps
 */
export interface AvisoFormProps {
  /**
   * Función que se ejecuta al enviar los datos del formulario.
   *
   * @param {AvisoValues} data - Datos del formulario de aviso.
   */
  onSubmitData: (data: AvisoValues) => void;

  /**
   * Indica si el formulario está en estado de carga.
   *
   * @type {boolean}
   */
  loading: boolean;

  /**
   * Función para actualizar el estado de carga.
   *
   * @param {boolean} loading - Estado de carga.
   */
  setLoading: (loading: boolean) => void;
}

/**
 * Valores que tiene el formulario de aviso.
 *
 * @interface AvisoValues
 */
export interface AvisoValues {
  /**
   * El nombre del que registra el avistamiento.
   *
   */
  Nombre: string;

  /**
   * El teléfono del que registra el avistamiento.
   *
   */
  Telefono: string;

  /**
   * Indica si el lugar es de fácil acceso.
   *
   */
  FacilAcceso: boolean;

  /**
   * Indica si el lugar es un acantilado.
   *
   */
  Acantilado: boolean;

  /**
   * Indica el tipo de sustrato en el lugar, puede ser Arena, Grava, Rocoso u Otro.
   * Cada uno tiene un valor entero dictado por el modelo de VaraWeb.
   *
   */
  Sustrato: number;

  /**
   * Indica el último lugar donde se vio el animal, puede ser Playa o Agua.
   * Cada uno tiene un valor entero dictado por el modelo de VaraWeb.
   *
   */
  LugarDondeSeVio: number;

  /**
   * Fecha en la que se realizó el avistamiento de formato YYYY-MM-DD.
   *
   */
  FechaDeAvistamiento: string;

  /**
   * Nombre de la especie puede ser Odontoceto, Misticeto, Pinnipedo o Sirenio.
   * Es opcional
   */
  TipoDeAnimal?: string;

  /**
   * Observaciones adicionales sobre el avistamiento.
   *
   */
  Observaciones: string;

  /**
   * Condición del animal puede ser Vivo, Muerto o Desconocido.
   * Cada uno tiene un valor entero dictado por el modelo de VaraWeb.
   *
   */
  CondicionDeAnimal: number;

  /**
   * Cantidad de animales observados.
   *
   */
  CantidadDeAnimales: number;

  /**
   * Información adicional relevante para el avistamiento.
   *
   * @type {string}
   */
  InformacionDeLocalizacion: string;

  /**
   * Latitud de la ubicación del avistamiento.
   *
   */
  Latitud: number | null;

  /**
   * Longitud de la ubicación del avistamiento.
   *
   * @type {number}
   */
  Longitud: number | null;

  /**
   * Fotografias del avistamiento.
   *
   * @type {number}
   */
  Fotografias: string | null;
}
