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

  /**
   * Datos completos del aviso.
   * Contiene toda la información necesaria del aviso como un objeto del tipo `AvisoValues`.
   * Si la latitud y longitud de data están vacías, se utilizará la ubicación del dispositivo móvil.
   * @type {AvisoValues}
   */
  data?: AvisoValues;
  /**
   * Función que se ejecuta cuando los valores del aviso cambian.
   * Proporciona un objeto parcial de `AvisoValues` con los valores actualizados.
   *
   * @param {Partial<AvisoValues>} values - Objeto con los valores modificados del aviso.
   * @returns {void}
   */
  onValuesChange: (values: Partial<AvisoValues>) => void;

  /**
   * Indica si el componente está deshabilitado.
   * @type {boolean}
   */
  isDisabled?: boolean;

  /**
   * Estilo opcional para el componente ScrollView.
   *
   * Puedes proporcionar un objeto de estilo o un arreglo de estilos que cumplan con la interfaz `ViewStyle`.
   *
   * @type {StyleProp<ViewStyle>}
   */
  scroolViewStyles?:  StyleProp<ViewStyle>

  /**
   * Estilo opcional para el componente RoundedButton.
   *
   * Puedes proporcionar un objeto de estilo o un arreglo de estilos que cumplan con la interfaz `ViewStyle`.
   *
   * @type {StyleProp<ViewStyle>}
   */
  buttonStyles?: StyleProp<ViewStyle>

  /**
   * Componente personalizado para el botón, puede ser un ReactElement o un componente funcional/clase.
   * Este componente debe soportar la propiedad `onPress`.
   *
   * @type {React.ReactElement<{ onPress?: () => void }> | React.ComponentType<{ onPress?: () => void }>}
   */
  reactNodeButton?:
    | React.ReactElement<{ onPress?: () => void }>
    | React.ComponentType<{ onPress?: () => void }>;

  /**
   * Indica si se debe mostrar la información de la especie.
   * @type {boolean}
   */
  showEspecie?: boolean;
  onValidityChange?: (isValid: boolean) => void;
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
   * Fecha en la que se realizó el avistamiento. solo se acepta el siguiente formato "2024-12-30"
   *
   */
  FechaDeAvistamiento: string;

  /**
   * Nombre de la especie puede ser Odontoceto, Misticeto, Pinnipedo o Sirenio.
   * Es opcional
   */
  TipoDeAnimal?: number;

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
  CantidadDeAnimales: string;

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
  Latitud: string;

  /**
   * Longitud de la ubicación del avistamiento.
   *
   * @type {number}
   */
  Longitud: string;

  /**
   * Fotografia del avistamiento.
   *
   * @type {number}
   */
  Fotografia: string | null;
}
