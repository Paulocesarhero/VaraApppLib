import React, { useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registroFormStyle } from "../RegistroForm.style";
import InputField from "../../MaterialInput/MaterialInput";
import MaterialSelector from "../../MaterialSelector/MaterialSelector";
import MaterialPasswordInput from "../../MaterialPassword/MaterialPassword";
import { RegistroCientifico } from "../../../services/AuthService";
import { RegistroCientificoRequest } from "../../../services/AuthServiceInterfaces";
import { InformacionPersonalFormStyle } from "./InformacionPersonalForm.style";
import axios from "axios";
import { router } from "expo-router";

const InformacionPersonalForm: React.FC = () => {
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila de Zaragoza",
    "Colima",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán de Ocampo",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz de Ignacio de la Llave",
    "Yucatán",
    "Zacatecas",
  ];

  interface FormData {
    estado: string;
    nombre: string;
    apellidoPat: string;
    apellidoMat: string;
    institucion: string;
    telefonoMovil: string;
    telefono: string;
    password: string;
    correo: string;
    isValidPassword: boolean;
    calle: string;
    codigoPostal: string;
    ciudad: string;
  }

  const [formData, setFormData] = useState<FormData>({
    estado: "",
    nombre: "",
    apellidoPat: "",
    apellidoMat: "",
    institucion: "",
    telefonoMovil: "",
    telefono: "",
    password: "",
    correo: "",
    isValidPassword: false,
    calle: "",
    codigoPostal: "",
    ciudad: "",
  });

  const estadoMap = {
    Aguascalientes: "Aguascalientes",
    "Baja California": "BajaCalifornia",
    "Baja California Sur": "BajaCaliforniaSur",
    Campeche: "Campeche",
    Chiapas: "Chiapas",
    Chihuahua: "Chihuahua",
    "Ciudad de México": "CiudadDeMexico",
    "Coahuila de Zaragoza": "CoahuilaDeZaragoza",
    Colima: "Colima",
    Durango: "Durango",
    Guanajuato: "Guanajuato",
    Guerrero: "Guerrero",
    Hidalgo: "Hidalgo",
    Jalisco: "Jalisco",
    México: "México",
    "Michoacán de Ocampo": "MichoacanDeOcampo",
    Morelos: "Morelos",
    Nayarit: "Nayarit",
    "Nuevo León": "NuevoLeon",
    Oaxaca: "Oaxaca",
    Puebla: "Puebla",
    Querétaro: "Querétaro",
    "Quintana Roo": "QuintanaRoo",
    "San Luis Potosí": "SanLuisPotosi",
    Sinaloa: "Sinaloa",
    Sonora: "Sonora",
    Tabasco: "Tabasco",
    Tamaulipas: "Tamaulipas",
    Tlaxcala: "Tlaxcala",
    "Veracruz de Ignacio de la Llave": "Veracruz",
    Yucatán: "Yucatán",
    Zacatecas: "Zacatecas",
  };

  const scrollViewRef = useRef<ScrollView>(null);

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (newPassword: string, isValid: boolean) => {
    handleInputChange("password", newPassword);
    handleInputChange("isValidPassword", isValid);
  };

  const handleRegistroCientifico = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const estadoEnum = estadoMap[formData.estado];

    const camposRequeridos: { [key: string]: string } = {
      nombre: formData.nombre,
      "apellido paterno": formData.apellidoPat,
      "apellido materno": formData.apellidoMat,
      institución: formData.institucion,
      "teléfono movil": formData.telefonoMovil,
      "télefono fijo": formData.telefono,
      correo: formData.correo,
    };

    for (const [campo, valor] of Object.entries(camposRequeridos)) {
      if (!valor || valor.trim() === "") {
        Alert.alert("Error", `El campo ${campo} es obligatorio.`);
        return;
      }
    }

    if (!formData.isValidPassword) {
      Alert.alert("Error", "Por favor, ingrese una contraseña válida.");
      return;
    }

    const nuevoCientifico: RegistroCientificoRequest = {
      Nombre: formData.nombre,
      ApellidoPaterno: formData.apellidoPat,
      ApellidoMaterno: formData.apellidoMat,
      CorreoElectronico: formData.correo,
      Contraseña: formData.password,
      Institucion: formData.institucion,
      TelefonoMovil: formData.telefonoMovil,
      Estado: estadoEnum || "",
      TelefonoFijo: formData.telefono,
      Calle: formData.calle,
      CodigoPostal: formData.codigoPostal,
      Ciudad: formData.ciudad,
      Origen: "Aplicación Móvil Expertos",
    };

    try {
      const response = await RegistroCientifico(nuevoCientifico);

      if (!response.error) {
        Alert.alert("Éxito", "Registro científico realizado con éxito.");
        router.back();
      } else {
        Alert.alert("Advertencia", response.message[0]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          Alert.alert("Error ", "El correo ingresado ya está en uso");
        }
      } else {
        console.error(
          "Error inesperado ",
          "Hubo un error en el servidor, intente más tarde.",
        );
      }
    }
  };

  // @ts-ignore
  return (
    <KeyboardAvoidingView
      style={InformacionPersonalFormStyle.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // Ajusta este valor según sea necesario
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={InformacionPersonalFormStyle.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={registroFormStyle.title}>Información personal</Text>
          <MaterialPasswordInput
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            onPasswordChange={handlePasswordChange}
            value={formData.password}
          />
          <InputField
            iconName="mail"
            iconFamily="Ionicons"
            label="Email"
            placeholder="cientifico@gmail.com"
            maxLength={50}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("correo", value)}
            value={formData.correo}
          />

          <InputField
            iconName="person"
            iconFamily="Ionicons"
            label="Nombre"
            placeholder="Nombre"
            autoCapitalize="words"
            maxLength={50}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("nombre", value)}
            value={formData.nombre}
          />
          <InputField
            iconName="person"
            iconFamily="Ionicons"
            label="Apellido paterno"
            placeholder="Apellido paterno"
            autoCapitalize="words"
            maxLength={50}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("apellidoPat", value)}
            value={formData.apellidoPat}
          />
          <InputField
            iconName="person"
            iconFamily="Ionicons"
            label="Apellido materno"
            placeholder="Apellido materno"
            autoCapitalize="words"
            maxLength={50}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("apellidoMat", value)}
            value={formData.apellidoMat}
          />
          <InputField
            iconName="graduation-cap"
            iconFamily="Entypo"
            label="Institución"
            placeholder="Ejemplo: Universidad Veracruzana"
            autoCapitalize="words"
            maxLength={50}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("institucion", value)}
            value={formData.institucion}
          />
          <InputField
            iconName="phone"
            iconFamily="Entypo"
            label="Teléfono móvil"
            placeholder="10 dígitos"
            keyboardType="phone-pad"
            textContentType={"telephoneNumber"}
            maxLength={10}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("telefonoMovil", value)}
            value={formData.telefonoMovil}
          />
          <InputField
            iconName="phone"
            iconFamily="Entypo"
            label="Teléfono fijo"
            placeholder="10 dígitos"
            keyboardType="phone-pad"
            textContentType={"telephoneNumber"}
            maxLength={10}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("telefono", value)}
            value={formData.telefono}
          />
          <MaterialSelector
            onEstadoChange={(value) => handleInputChange("estado", value)}
            estados={estados}
            label="Estado"
          />
          <InputField
            iconName="address"
            iconFamily="Entypo"
            label="Calle"
            placeholder="Francisco I. Maderito"
            keyboardType="default"
            IsRequired={false}
            textContentType={"streetAddressLine1"}
            maxLength={80}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("calle", value)}
            value={formData.calle}
          />
          <InputField
            iconName="address"
            iconFamily="Entypo"
            label="Código postal"
            placeholder="91079"
            keyboardType="default"
            IsRequired={false}
            textContentType={"postalCode"}
            maxLength={5}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("codigoPostal", value)}
            value={formData.codigoPostal}
          />
          <InputField
            iconName="address"
            iconFamily="Entypo"
            label="Ciudad"
            placeholder="Xalapa"
            keyboardType="default"
            IsRequired={false}
            textContentType={"countryName"}
            maxLength={40}
            autoCorrect={false}
            onTextChange={(value) => handleInputChange("ciudad", value)}
            value={formData.ciudad}
          />

          <TouchableWithoutFeedback onPress={handleRegistroCientifico}>
            <View style={InformacionPersonalFormStyle.submitButton}>
              <Text style={InformacionPersonalFormStyle.submitButtonText}>
                Enviar
              </Text>
              <Ionicons name="checkmark" size={24} color="black" />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default InformacionPersonalForm;
