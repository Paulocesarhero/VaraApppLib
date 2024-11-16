import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { PhotoPickerProps } from "./types";
import { PhotoPickerStyle } from "./PhotoPicker.style";

/**
 * Un botón que permite seleccionar una imagen del carrete.
 *
 * @param {PhotoPickerProps} props - Las propiedades del componente.
 * @returns {JSX.Element}
 */
const PhotoPicker: FC<PhotoPickerProps> = ({
  label,
  onPhotoSelect,
  buttonStyle,
  labelStyle,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Se necesitan permisos para acceder al carrete.",
        "Habilita los permisos en configuración",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Ir a Configuración",
            onPress: async () => {
              // Abre la configuración de la aplicación
              const supported = await Linking.canOpenURL("app-settings:");
              if (supported) {
                await Linking.openSettings();
              } else {
                Alert.alert(
                  "Error",
                  "No se puede abrir la configuración en este dispositivo."
                );
              }
            },
          },
        ]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setSelectedPhoto(uri);
      onPhotoSelect(uri);
    }
  };

  return (
    <View style={PhotoPickerStyle.container}>
      {label && (
        <Text style={[PhotoPickerStyle.label, labelStyle]}>{label}</Text>
      )}
      <TouchableOpacity
        style={[PhotoPickerStyle.button, buttonStyle]}
        onPress={handlePickImage}
      >
        <Text style={PhotoPickerStyle.buttonText}>Seleccionar</Text>
      </TouchableOpacity>
      {selectedPhoto && (
        <Image
          source={{ uri: selectedPhoto }}
          style={PhotoPickerStyle.imagePreview}
        />
      )}
    </View>
  );
};

export default PhotoPicker;
