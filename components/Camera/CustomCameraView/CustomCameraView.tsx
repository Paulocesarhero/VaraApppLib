import React, { useRef, useState } from "react";
import { CameraType, CameraView, FlashMode } from "expo-camera";
import { View, Modal } from "react-native";
import CameraControls from "../CameraControls/CameraControls";
import { CustomCameraViewProps } from "./types";
import { CustomCameraViewStyle } from "./CustomCameraView.style";
/**
 * Componente de vista personalizada de cámara que muestra una interfaz de cámara completa con controles de toma de fotos,
 * cambio de dirección de cámara, zoom y flash. Utiliza Expo Camera y permite capturar imágenes con la cámara del dispositivo.
 *
 * @component
 */

const CustomCameraView: React.FC<CustomCameraViewProps> = ({
  onClose,
  setPhotoUri,
  setPhotoBase64,
}) => {
  const cameraRef = useRef<CameraView | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [isFlashActive, setIsFlashActive] = useState<FlashMode>("off");
  const [zoom, setZoom] = useState<number>(0);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        animateShutter: true,
      };
      const photo = await cameraRef.current.takePictureAsync(options);
      if (photo && photo.uri) {
        setPhotoUri(photo.uri);
        setPhotoBase64(photo.base64 || null);
      }
    }
  };
  const toggleCameraFacing = () =>
    setFacing(facing === "back" ? "front" : "back");
  const toggleFlash = () =>
    setIsFlashActive(isFlashActive === "off" ? "on" : "off");
  const increaseZoom = () =>
    setZoom((prevZoom) => Math.min(prevZoom + 0.001, 1)); // Máximo 1
  const decreaseZoom = () =>
    setZoom((prevZoom) => Math.max(prevZoom - 0.001, 0)); // Mínimo 0

  return (
    <Modal>
      <View style={[CustomCameraViewStyle.container]}>
        <CameraView
          style={CustomCameraViewStyle.camera}
          facing={facing}
          ref={cameraRef}
          flash={isFlashActive}
          zoom={zoom}
          autofocus={"on"}
          responsiveOrientationWhenOrientationLocked={true}
        >
          <CameraControls
            setZoom={setZoom}
            isFlashActive={isFlashActive}
            facing={facing}
            onFlashPress={toggleFlash}
            onToggleFacing={toggleCameraFacing}
            onClose={onClose}
            onTakePicture={takePicture}
            onIncreaseZoom={increaseZoom}
            zoom={zoom}
            onDecreaseZoom={decreaseZoom}
          />
        </CameraView>
      </View>
    </Modal>
  );
};

export default CustomCameraView;
