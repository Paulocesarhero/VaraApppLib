import React, { useEffect, useState } from "react";
import { Alert, Linking, Pressable, View } from "react-native";
import { CameraButtonProps } from "./types";
import { useCameraPermissions } from "expo-camera";
import { CameraButtonStyle } from "./CameraButton.style";
import PhotoPreview from "../PhotoPreview";
import CustomCameraView from "../CustomCameraView/CustomCameraView";
import { AntDesign } from "@expo/vector-icons";

// Botón de la cámara
const CameraButton: React.FC<CameraButtonProps> = ({
  sizeButton = 25,
  styleCamerPreview = {},
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraVisible, setIsCameraVisible] = useState(true);
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

  return (
    <View style={CameraButtonStyle.container}>
      {photoUri ? (
        <>
          <PhotoPreview
            photoUri={photoUri}
            sizeButtonPhotoPreview={sizeButton}
            styleCamerPreview={styleCamerPreview}
            onRetake={() => {
              openCamera();
              setPhotoUri(null);
            }}
          />
        </>
      ) : isCameraVisible ? (
        <CustomCameraView
          CameraViewStyle={CameraButtonStyle.camera}
          onClose={closeCamera}
          setPhotoBase64={setPhotoBase64}
          setPhotoUri={setPhotoUri}
        />
      ) : (
        <Pressable
          onPress={() => {
            openCamera();
            setPhotoUri(null);
          }}
        >
          <AntDesign name="camerao" size={sizeButton} />
        </Pressable>
      )}
    </View>
  );
};

export default CameraButton;
