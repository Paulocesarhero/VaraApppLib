import { PressableProps } from "react-native";

/**
 * Propiedades para el componente de cámara personalizada `CustomCamera`.
 *
 * @interface CustomCameraProps
 * @extends {PressableProps}
 */
export interface CustomCameraProps extends PressableProps {
  /**
   * Cambia la cámara entre frontal y trasera.
   * @type {() => void}
   */
  onToggleFacing: () => void;

  /**
   * Cierra la vista de la cámara.
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * Activa la captura de una foto.
   * @type {() => void}
   */
  onTakePicture: () => void;

  /**
   * Activa o desactiva el flash de la cámara.
   * @type {() => void}
   */
  onFlashPress: () => void;

  /**
   * Estado actual del flash, puede ser "on" o "off".
   * @type {string}
   */
  isFlashActive: string;

  /**
   * Dirección de la cámara en uso, "front" (frontal) o "back" (trasera).
   * @type {string}
   */
  facing: string;

  /**
   * Aumenta el nivel de zoom de la cámara.
   * @type {() => void}
   */
  onIncreaseZoom: () => void;

  /**
   * Disminuye el nivel de zoom de la cámara.
   * @type {() => void}
   */
  onDecreaseZoom: () => void;

  /**
   * Nivel actual de zoom de la cámara, un valor entre 0 (sin zoom) y 1 (zoom máximo).
   * @type {number}
   */
  zoom: number;

  /**
   * Función para establecer el nivel de zoom.
   * @param {number} value - Nuevo valor para el zoom, debe estar entre 0 y 1.
   */
  setZoom: (value: number) => void;
}
