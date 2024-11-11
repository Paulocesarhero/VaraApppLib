/**
 * Propiedades para el componente MapScreen.
 */
export interface MapProps {
  /**
   * Coordenada de longitud para la posición inicial del marcador.
   * @type {number}
   */
  markerLongitude: number;

  /**
   * Coordenada de latitud para la posición inicial del marcador.
   * @type {number}
   */
  markerLatitude: number;

  /**
   * Función de callback que se ejecuta cuando el usuario selecciona una nueva posición en el mapa.
   * Recibe la nueva longitud y latitud de la posición seleccionada.
   * @param {number} longitude - La longitud de la nueva posición del marcador.
   * @param {number} latitude - La latitud de la nueva posición del marcador.
   */
  onMarkerPositionChange: (longitude: number, latitude: number) => void;
}
