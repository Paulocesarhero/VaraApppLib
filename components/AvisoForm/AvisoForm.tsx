import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Location from "expo-location";
import * as Linking from "expo-linking";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RoundedButton from "../RoundedButton/RoundedButton";
import InputField from "../MaterialInput/MaterialInput";
import MaterialSelector from "../MaterialSelector/MaterialSelector";
import { Estado } from "../MaterialSelector/types";
import CustomCheckBox from "../ CustomCheckBox/CustomCheckBox";
import DateSelector from "../DateSelector/DateSelector";
import { AvisoFormProps, AvisoValues } from "./types";
import { action } from "@storybook/addon-actions";

/**
 * AvisoFrom es un componente que muestra almacena todos los componentes necesarios
 * para registrar un aviso.
 *
 * @component
 * @param {AvisoFormProps} props - Las propiedades del componente.
 * @example
 *  <AvisoForm
 *     onSubmitData={action("onSubmitData")}
 *     loading={false}
 *     setLoading={action("setLoading")}
 *     showEspecie={false}
 * />
 */

export const AvisoForm: React.FC<
  AvisoFormProps & { showEspecie?: boolean }
> = ({ onSubmitData, loading, setLoading, showEspecie = false }) => {
  const [latitud, setLatitud] = useState<number | null>(null);
  const [longitud, setLongitud] = useState<number | null>(null);

  const lugarDondeSeVioList: Estado[] = [
    {
      id: "Playa",
      label: "Playa",
      apiValue: "0",
    },
    {
      id: "Agua",
      label: "Agua",
      apiValue: "1",
    },
  ];

  const especieList: Estado[] = [
    {
      id: "Odontoceto",
      label: "Odontoceto",
      apiValue: "0",
    },
    {
      id: "Misticeto",
      label: "Misticeto",
      apiValue: "1",
    },
    {
      id: "Pinnípedo",
      label: "Pinnípedo",
      apiValue: "2",
    },
    {
      id: "Sirenio",
      label: "Sirenio",
      apiValue: "3",
    },
  ];

  const sustratosList: Estado[] = [
    {
      id: "Arena",
      label: "Arena",
      apiValue: "0",
    },
    {
      id: "Grava",
      label: "Grava",
      apiValue: "1",
    },
    {
      id: "Rocoso",
      label: "Rocoso",
      apiValue: "2",
    },
    {
      id: "Otro",
      label: "Otro",
      apiValue: "3",
    },
  ];

  const condicionesList: Estado[] = [
    {
      id: "Vivo",
      label: "Vivo",
      apiValue: "0",
    },
    {
      id: "Muerto",
      label: "Muerto",
      apiValue: "1",
    },
    {
      id: "Desconocido",
      label: "Desconocido",
      apiValue: "2",
    },
  ];

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

  const { handleSubmit, control, setValue } = useForm<AvisoValues>({
    defaultValues: {
      FacilAcceso: false,
      Acantilado: false,
      LugarDondeSeVio: 0,
      FechaAvistamiento: new Date().toISOString().split("T")[0],
      Especie: "",
      Observaciones: "",
      Condicion: "",
      Pais: "Mexico",
      Estado: "",
      Ciudad: "",
      Localidad: "",
      InformacionAdicional: "",
    },
  });

  useEffect(() => {
    (async () => {
      //Sección donde se solicita la ubicación (cuando carga el componente)
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permisos de ubicación denegados",
          "Por favor, habilita los permisos de ubicación en la configuración de la aplicación.",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Ir a Configuración",
              onPress: () => Linking.openSettings(), // Abre la configuración de la aplicación
            },
          ]
        );
        return;
      }
      //Aquí se obtiene la ubicación

      let location = await Location.getCurrentPositionAsync({});
      setLatitud(location.coords.latitude);
      setLongitud(location.coords.longitude);

      setValue("Latitud", location.coords.latitude);
      setValue("Longitud", location.coords.longitude);

      console.log("Latitud:", location.coords.latitude);
      console.log("Longitud:", location.coords.longitude);
    })();
  }, []);

  const onSubmit: SubmitHandler<AvisoValues> = (data) => {
    console.log("Form Data:", data);
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
          contentContainerStyle={{ padding: 16 }}
          keyboardShouldPersistTaps="handled"
        >
          <RoundedButton
            onPress={handleSubmit(onSubmit)}
            color={"#000000"}
            text={"Enviar"}
            style={{ marginVertical: 10 }}
            loading={loading}
          />

          <Controller
            control={control}
            name="FechaAvistamiento"
            render={({ field: { value } }) => (
              <DateSelector
                label="Fecha de Avistamiento"
                onDateChange={(selectedDate: Date) => {
                  const formattedDate = selectedDate
                    .toISOString()
                    .split("T")[0]; // Formateo para que sea como el API: YYYY-MM-DD
                  setValue("FechaAvistamiento", formattedDate);
                  console.log(formattedDate);
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="Sustrato"
            render={({ field: { onChange, onBlur, value } }) => (
              <MaterialSelector
                label={"Sustrato"}
                estados={sustratosList}
                iconName={"earth"}
                iconFamily={"Ionicons"}
                onEstadoChange={(estado: string) => {
                  onChange(estado);
                  console.log(estado);
                }}
              />
            )}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Controller
              control={control}
              name="FacilAcceso"
              render={({ field: { value, onChange } }) => (
                <CustomCheckBox
                  label="Fácil Acceso?"
                  isChecked={value} // Set checked status
                  onToggle={() => onChange(!value)} // Toggle value on press
                />
              )}
            />

            <View style={{ width: 16 }} />

            <Controller
              control={control}
              name="Acantilado"
              render={({ field: { value, onChange } }) => (
                <CustomCheckBox
                  label="Acantilado"
                  isChecked={value}
                  onToggle={() => onChange(!value)}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="LugarDondeSeVio"
            render={({ field: { onChange, onBlur, value } }) => (
              <MaterialSelector
                label={"Lugar donde se vio el mamífero"}
                estados={lugarDondeSeVioList}
                iconName={"eye"}
                iconFamily={"Entypo"}
                onEstadoChange={(estado: string) => {
                  onChange(estado);
                  console.log(estado);
                }}
              />
            )}
          />

          {showEspecie && (
            <Controller
              control={control}
              name="Especie"
              render={({ field: { onChange, onBlur, value } }) => (
                <MaterialSelector
                  label={"Tipo de Animal"}
                  estados={especieList}
                  iconName={"fish"}
                  iconFamily={"Ionicons"}
                  onEstadoChange={(estado: string) => {
                    onChange(estado);
                    console.log(estado);
                  }}
                />
              )}
            />
          )}

          <InputField
            nameInput={"Observaciones"}
            iconName="text"
            iconFamily="Entypo"
            label="Observaciones"
            placeholder="Observaciones"
            control={control}
            isRequired={false}
          />
          <Controller
            control={control}
            name="Estado"
            render={({ field: { onChange, onBlur, value } }) => (
              <MaterialSelector
                label={"Estado del animal"}
                estados={condicionesList}
                iconName={"heart"}
                iconFamily={"Entypo"}
                onEstadoChange={(estado: string) => {
                  onChange(estado); // Actualiza el valor del estado en el formulario
                  console.log(estado);
                }}
              />
            )}
          />
          <InputField
            nameInput={"Cantidad"}
            label="Cantidad"
            placeholder="Ejemplo: 3"
            keyboardType="numeric"
            control={control}
            isRequired={true}
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
            placeholder="Ejemplo: Xalapa"
            control={control}
            isRequired={false}
          />
          <InputField
            nameInput={"Localidad"}
            iconName="address"
            iconFamily="Entypo"
            label="Localidad"
            placeholder="Ejemplo: Centro"
            control={control}
            isRequired={false}
          />
          <InputField
            nameInput={"InformacionAdicional"}
            iconName="text"
            iconFamily="Entypo"
            label="Información Adicional"
            placeholder="Otros detalles"
            control={control}
            isRequired={false}
          />

          <InputField
            nameInput={"Latitud"}
            iconName="compass"
            iconFamily="Ionicons"
            label="Latitud"
            placeholder={latitud ? latitud.toString() : "Latitud no disponible"}
            control={control}
            isRequired={true}
          />

          <InputField
            nameInput={"Longitud"}
            iconName="compass"
            iconFamily="Ionicons"
            label="Longitud"
            placeholder={
              longitud ? longitud.toString() : "Longitud no disponible"
            }
            control={control}
            isRequired={true}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
