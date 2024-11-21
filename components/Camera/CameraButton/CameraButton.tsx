import React, { useEffect, useState } from "react";
import { Alert, Linking, Pressable, View } from "react-native";
import { CameraButtonProps } from "./types";
import { useCameraPermissions } from "expo-camera";
import { CameraButtonStyle } from "./CameraButton.style";
import CustomCameraView from "../CustomCameraView/CustomCameraView";
import { AntDesign } from "@expo/vector-icons";

/**

 * Componente de botón de cámara que permite tomar fotos, solicitar permisos de cámara y
 * mostrar una vista previa de la foto tomada. Maneja los permisos de cámara y proporciona opciones
 * para retomar la foto si es necesario.
 *
 * @component
 * @example
 * <CameraButton sizeButton={30} styleCamerPreview={{ borderRadius: 10 }} />
 */
const CameraButton: React.FC<CameraButtonProps> = ({
  sizeButton = 25,
  photoUri,
  setPhotoUri,
}) => {
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const closeCamera = () => {
    setIsCameraVisible(false);
  };

  const openCamera = () => setIsCameraVisible(true);

  const showAlert = () => {
    Alert.alert(
      "El acceso a la cámara fue denegado",
      "Abre la configuración y permite acceso a la cámara",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Abrir configuración",
          onPress: () => Linking.openSettings(),
        },
      ]
    );
  };

  const handleRequestPermission = async () => {
    const result = await requestPermission();
    setPermissionDenied(!result.granted);
  };

  // Mostrar la alerta solo cuando el permiso no sea concedido
  useEffect(() => {
    if (permission && !permission.granted && permissionDenied) {
      showAlert();
    }
  }, [permission, permissionDenied]);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={CameraButtonStyle.container}>
        <Pressable onPress={handleRequestPermission}>
          <AntDesign name="camerao" size={sizeButton} />
        </Pressable>
      </View>
    );
  }

  if (isCameraVisible && !photoUri) {
    return (
      <View style={{ flex: 1 }}>
        <CustomCameraView
          CameraViewStyle={CameraButtonStyle.camera}
          onClose={closeCamera}
          setPhotoBase64={setPhotoBase64}
          setPhotoUri={setPhotoUri}
        />
      </View>
    );
  }

  return (
    <View style={CameraButtonStyle.container}>
      <Pressable
        onPress={() => {
          openCamera();
          setPhotoUri(null);
        }}
      >
        <AntDesign name="camerao" size={sizeButton} />
      </Pressable>
    </View>
  );
};

export default CameraButton;
