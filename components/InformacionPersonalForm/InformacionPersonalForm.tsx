import React, { useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { InformacionPersonalFormStyle } from "./InformacionPersonalForm.style";
import RoundedButton from "../RoundedButton/RoundedButton";
import { Estado } from "../MaterialSelector/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import MaterialPassword from "../MaterialPassword/MaterialPassword";
import InputField from "../MaterialInput/MaterialInput";
import MaterialSelector from "../MaterialSelector/MaterialSelector";

const InformacionPersonalForm: React.FC<InformacionPersonalFormProps> = ({
  onSubmitData,
  loading,
  setLoading,
}) => {
  const estadosList: Estado[] = [
    {
      id: "Aguascalientes",
      label: "Aguascalientes",
      apiValue: "Aguascalientes",
    },
    {
      id: "BajaCalifornia",
      label: "Baja California",
      apiValue: "BajaCalifornia",
    },
    {
      id: "BajaCaliforniaSur",
      label: "Baja California Sur",
      apiValue: "BajaCaliforniaSur",
    },
    { id: "Campeche", label: "Campeche", apiValue: "Campeche" },
    { id: "Chiapas", label: "Chiapas", apiValue: "Chiapas" },
    { id: "Chihuahua", label: "Chihuahua", apiValue: "Chihuahua" },
    {
      id: "CiudadDeMexico",
      label: "Ciudad de México",
      apiValue: "CiudadDeMexico",
    },
    {
      id: "CoahuilaDeZaragoza",
      label: "Coahuila de Zaragoza",
      apiValue: "CoahuilaDeZaragoza",
    },
    { id: "Colima", label: "Colima", apiValue: "Colima" },
    { id: "Durango", label: "Durango", apiValue: "Durango" },
    { id: "Guanajuato", label: "Guanajuato", apiValue: "Guanajuato" },
    { id: "Guerrero", label: "Guerrero", apiValue: "Guerrero" },
    { id: "Hidalgo", label: "Hidalgo", apiValue: "Hidalgo" },
    { id: "Jalisco", label: "Jalisco", apiValue: "Jalisco" },
    { id: "Mexico", label: "México", apiValue: "México" },
    {
      id: "MichoacanDeOcampo",
      label: "Michoacán de Ocampo",
      apiValue: "MichoacanDeOcampo",
    },
    { id: "Morelos", label: "Morelos", apiValue: "Morelos" },
    { id: "Nayarit", label: "Nayarit", apiValue: "Nayarit" },
    { id: "NuevoLeon", label: "Nuevo León", apiValue: "NuevoLeon" },
    { id: "Oaxaca", label: "Oaxaca", apiValue: "Oaxaca" },
    { id: "Puebla", label: "Puebla", apiValue: "Puebla" },
    { id: "Queretaro", label: "Querétaro", apiValue: "Querétaro" },
    { id: "QuintanaRoo", label: "Quintana Roo", apiValue: "QuintanaRoo" },
    {
      id: "SanLuisPotosi",
      label: "San Luis Potosí",
      apiValue: "SanLuisPotosi",
    },
    { id: "Sinaloa", label: "Sinaloa", apiValue: "Sinaloa" },
    { id: "Sonora", label: "Sonora", apiValue: "Sonora" },
    { id: "Tabasco", label: "Tabasco", apiValue: "Tabasco" },
    { id: "Tamaulipas", label: "Tamaulipas", apiValue: "Tamaulipas" },
    { id: "Tlaxcala", label: "Tlaxcala", apiValue: "Tlaxcala" },
    {
      id: "Veracruz",
      label: "Veracruz de Ignacio de la Llave",
      apiValue: "Veracruz",
    },
    { id: "Yucatan", label: "Yucatán", apiValue: "Yucatán" },
    { id: "Zacatecas", label: "Zacatecas", apiValue: "Zacatecas" },
  ];

  interface FormValues {
    Contraseña: string;
    CorreoElectronico: string;
    Estado: string;
    Nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    Institucion: string;
    TelefonoMovil: string;
    TelefonoFijo: string;
    Ciudad: string;
    Calle: string;
    CodigoPostal: string;
  }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      Contraseña: "",
      CorreoElectronico: "",
      Estado: "",
      Nombre: "",
      ApellidoPaterno: "",
      ApellidoMaterno: "",
      Institucion: "",
      TelefonoMovil: "",
      TelefonoFijo: "",
      Ciudad: "",
      Calle: "",
      CodigoPostal: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmitData(data);
  };

  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={InformacionPersonalFormStyle.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <RoundedButton
            onPress={handleSubmit(onSubmit)}
            color={"#000"}
            text={"Enviar"}
            style={{ marginVertical: 10 }}
            loading={loading}
          />
          <MaterialPassword
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            isRequired={true}
            control={control}
            name="Contraseña"
            autoComplete={"password"}
          />
          <InputField
            nameInput={"CorreoElectronico"}
            iconName="mail"
            iconFamily="Ionicons"
            label="Email"
            autoComplete={"email"}
            placeholder="cientifico@gmail.com"
            maxLength={50}
            autoCorrect={false}
            control={control}
            validateRules={{
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El formato del correo electrónico no es válido.",
              },
              maxLength: {
                value: 50,
                message:
                  "El correo electrónico no puede exceder los 50 caracteres.",
              },
              minLength: {
                value: 5,
                message:
                  "El correo electrónico debe tener al menos 5 caracteres.",
              },
            }}
          />
          <InputField
            nameInput={"Nombre"}
            iconName="people"
            iconFamily="Ionicons"
            label="Nombre"
            placeholder=""
            maxLength={50}
            autoCorrect={false}
            autoComplete={"name"}
            control={control}
            isRequired={true}
          />
          <InputField
            nameInput={"ApellidoPaterno"}
            iconName="people"
            iconFamily="Ionicons"
            label="Apellido paterno"
            placeholder=""
            maxLength={50}
            autoCorrect={false}
            autoComplete={"name-family"}
            control={control}
            isRequired={true}
          />
          <InputField
            nameInput={"ApellidoMaterno"}
            iconName="people"
            iconFamily="Ionicons"
            label="Apellido materno"
            placeholder=""
            maxLength={50}
            autoCorrect={false}
            autoComplete={"name-family"}
            control={control}
            isRequired={true}
          />
          <InputField
            nameInput={"Institucion"}
            iconName="school"
            iconFamily="Ionicons"
            label="Institucion"
            placeholder="Ejemplo: Universidad Veracruzana"
            maxLength={50}
            autoCorrect={false}
            control={control}
            isRequired={true}
          />
          <InputField
            nameInput={"TelefonoMovil"}
            iconName="call"
            iconFamily="Ionicons"
            label="Teléfono móvil"
            placeholder=""
            keyboardType={"phone-pad"}
            autoComplete={"tel"}
            maxLength={10}
            autoCorrect={false}
            control={control}
            isRequired={true}
            validateRules={{
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  "El número debe tener 10 dígitos sin espacios ni caracteres especiales.",
              },
              maxLength: {
                value: 10,
                message: "El número no puede tener más de 10 dígitos.",
              },
              minLength: {
                value: 10,
                message: "El número debe tener exactamente 10 dígitos.",
              },
            }}
          />
          <InputField
            nameInput={"TelefonoFijo"}
            iconName="call"
            iconFamily="Ionicons"
            label="Teléfono fijo"
            placeholder=""
            keyboardType={"phone-pad"}
            autoComplete={"tel"}
            maxLength={10}
            autoCorrect={false}
            control={control}
            isRequired={true}
            validateRules={{
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  "El número debe tener 10 dígitos sin espacios ni caracteres especiales.",
              },
              maxLength: {
                value: 10,
                message: "El número no puede tener más de 10 dígitos.",
              },
              minLength: {
                value: 10,
                message: "El número debe tener exactamente 10 dígitos.",
              },
            }}
          />
          <Controller
            control={control}
            name="Estado"
            render={({ field: { onChange, onBlur, value } }) => (
              <MaterialSelector
                label={"Estado"}
                estados={estadosList}
                onEstadoChange={(estado: string) => {
                  onChange(estado); // Actualiza el valor del estado en el formulario
                }}
              />
            )}
          />
          <InputField
            nameInput={"Ciudad"}
            iconName="address"
            iconFamily="Entypo"
            label="Ciudad"
            placeholder=" "
            maxLength={50}
            autoCorrect={false}
            control={control}
            isRequired={false}
          />
          <InputField
            nameInput={"Calle"}
            iconName="address"
            iconFamily="Entypo"
            label="Calle"
            placeholder=" "
            maxLength={50}
            autoCorrect={false}
            autoComplete={"address-line1"}
            control={control}
            isRequired={false}
          />
          <InputField
            nameInput={"CodigoPostal"}
            iconName="address"
            iconFamily="Entypo"
            label="Código postal"
            placeholder=" "
            autoComplete={"postal-code"}
            maxLength={5}
            keyboardType={"numeric"}
            autoCorrect={false}
            control={control}
            isRequired={false}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default InformacionPersonalForm;
