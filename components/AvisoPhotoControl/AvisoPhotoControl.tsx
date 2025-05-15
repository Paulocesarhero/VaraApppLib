// components/AvisoPhotoControl/AvisoPhotoControl.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import PhotoPreview from "../Camera/PhotoPreview";

const { width, height } = Dimensions.get("window");

interface AvisoPhotoControlProps {
  getValues: UseFormGetValues<any>;
  setValue: UseFormSetValue<any>;
  scrollRef?: React.RefObject<any>;
  isDisabled?: boolean;
  photoName: string;
  label: string;
}

const AvisoPhotoControl: React.FC<AvisoPhotoControlProps> = ({
  getValues,
  setValue,
  scrollRef,
  isDisabled = false,
  photoName,
  label,
}) => {
  const [uploading, setUploading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para tomar foto con la cámara
  const takePhoto = async () => {
    if (isDisabled) return;

    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Se necesitan permisos para acceder a la cámara");
        return;
      }

      setUploading(true);
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        setValue(photoName, imageUri, {
          shouldValidate: true,
          shouldDirty: true,
        });

        // Scroll al final después de tomar la foto
        setTimeout(() => {
          scrollRef?.current?.scrollToEnd({ animated: true });
        }, 300);
      }
    } catch (error) {
      console.error("Error al capturar imagen:", error);
      alert("Ocurrió un error al tomar la foto");
    } finally {
      setUploading(false);
    }
  };

  // Función para seleccionar imagen de la galería
  const pickImageFromGallery = async () => {
    if (isDisabled) return;

    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Se necesitan permisos para acceder a la galería");
        return;
      }

      setUploading(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        setValue(photoName, imageUri, {
          shouldValidate: true,
          shouldDirty: true,
        });

        // Scroll al final después de seleccionar la foto
        setTimeout(() => {
          scrollRef?.current?.scrollToEnd({ animated: true });
        }, 300);
      }
    } catch (error) {
      console.error("Error al seleccionar imagen:", error);
      alert("Ocurrió un error al seleccionar la foto");
    } finally {
      setUploading(false);
    }
  };

  const photoUri = getValues(photoName);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>

      <View style={styles.photoControls}>
        <TouchableOpacity
          style={styles.photoButton}
          onPress={takePhoto}
          disabled={isDisabled || uploading}
        >
          <MaterialIcons name="add-a-photo" size={24} color="#333" />
          <Text style={styles.buttonText}>Tomar foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.photoButton}
          onPress={pickImageFromGallery}
          disabled={isDisabled || uploading}
        >
          <Entypo name="images" size={24} color="#333" />
          <Text style={styles.buttonText}>Galería</Text>
        </TouchableOpacity>
      </View>

      {photoUri && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewLabel}>Vista previa de la foto:</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setModalVisible(true)}
          >
            <PhotoPreview
              styleCamerPreview={styles.previewImage}
              photoUri={photoUri}
            />
          </TouchableOpacity>
        </View>
      )}

      {/* Modal para mostrar la imagen ampliada */}
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <MaterialIcons name="close" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.modalImageContainer}>
            <Image
              source={{ uri: photoUri }}
              style={styles.fullImage}
              contentFit="contain"
              transition={200}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginBottom: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  photoControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  photoButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    minWidth: 120,
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
  },
  previewContainer: {
    marginTop: 15,
  },
  previewLabel: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  previewImage: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    height: 250,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  modalImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: width,
    height: height * 0.8,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
});

export default AvisoPhotoControl;
