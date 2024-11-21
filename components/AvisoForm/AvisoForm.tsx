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
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RoundedButton from "../RoundedButton/RoundedButton";
import InputField from "../MaterialInput/MaterialInput";
import MaterialSelector from "../MaterialSelector/MaterialSelector";
import { Estado } from "../MaterialSelector/types";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
import DateSelector from "../DateSelector/DateSelector";
import { AvisoFormProps, AvisoValues } from "./types";
import Map from "../Map/Map";
import { AvisoFormStyle } from "./AvisoForm.style";
import CameraButton from "../Camera/CameraButton/CameraButton";
import { Camera } from "expo-camera";
import PhotoPicker from "../PhotoPicker/PhotoPicker";
import PhotoPreview from "../Camera/PhotoPreview";
import { Entypo } from "@expo/vector-icons";

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
  const [photo, setPhoto] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

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

  const { handleSubmit, control, setValue } = useForm<AvisoValues>({
    defaultValues: {
      FacilAcceso: false,
      Acantilado: false,
      LugarDondeSeVio: 0,
      Sustrato: 0,
      FechaDeAvistamiento: new Date().toISOString().split("T")[0],
      TipoDeAnimal: "",
      Observaciones: "",
      CondicionDeAnimal: 0,
      InformacionDeLocalizacion: "",
      Fotografias: null,
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
              onPress: () => Linking.openSettings(),
            },
          ]
        );
        return;
      }

      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      if (cameraStatus !== "granted") {
        Alert.alert(
          "Permisos de cámara denegados",
          "Es necesario otorgar permisos de cámara para continuar. Puedes habilitarlos en la configuración de la aplicación.",
          [
            { text: "Cancelar", style: "cancel" },
            {
              text: "Ir a Configuración",
              onPress: async () => {
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

      // Obtiene la ubicación actual del usuario
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Establece las coordenadas obtenidas
      setLatitud(latitude);
      setLongitud(longitude);

      // Pasar las coordenadas a los campos de formulario
      setValue("Latitud", latitude);
      setValue("Longitud", longitude);

      console.log("Latitud1:", latitude);
      console.log("Longitud1:", longitude);
    })();
  }, []);

  const handleMarkerPositionChange = (longitude: number, latitude: number) => {
    setLatitud(latitude); // Actualiza la latitud en el useState
    setLongitud(longitude); // Actualiza la longitud en el useState
    setValue("Latitud", latitude); // Actualiza el campo de latitud en el formulario
    setValue("Longitud", longitude); // Actualiza el campo de longitud en el formulario
  };

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
            name="FechaDeAvistamiento"
            render={({ field: { value } }) => (
              <DateSelector
                label="Fecha de Avistamiento"
                onDateChange={(selectedDate: Date) => {
                  const formattedDate = selectedDate
                    .toISOString()
                    .split("T")[0]; // Formateo para que sea como el API: YYYY-MM-DD
                  setValue("FechaDeAvistamiento", formattedDate);
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
                  isChecked={value}
                  onToggle={() => onChange(!value)}
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
              name="TipoDeAnimal"
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
            name="CondicionDeAnimal"
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
            nameInput={"CantidadDeAnimales"}
            label="Cantidad"
            placeholder="1"
            keyboardType="numeric"
            control={control}
            isRequired={true}
          />
          <InputField
            nameInput={"InformacionDeLocalizacion"}
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
          <View style={{ height: 350, marginBottom: 5, marginTop: 15 }}>
            <Text style={AvisoFormStyle.mapTitle}>
              Ubicación del avistamiento
            </Text>
            <View style={AvisoFormStyle.mapContainer}>
              <Map
                markerLatitude={latitud || 0}
                markerLongitude={longitud || 0}
                onMarkerPositionChange={handleMarkerPositionChange}
              />
            </View>
          </View>

          <View>
            <Controller
              control={control}
              name="Fotografias"
              render={({ field: { onChange, value } }) => (
                <View>
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Toma una foto
                    </Text>
                    <CameraButton
                      sizeButton={50}
                      photoUri={value}
                      setPhotoUri={(uri: string | null) => {
                        onChange(uri);
                        setPhoto(uri);
                        if (uri) {
                          console.log("Imagen capturada desde la cámara:", uri);
                        }
                      }}
                    />
                  </View>

                  <PhotoPicker
                    label="Selecciona una foto"
                    icon={<Entypo name="images" size={24} color="black" />}
                    onPhotoSelect={(uri: string | null) => {
                      onChange(uri);
                      setPhoto(uri);
                      if (uri) {
                        console.log(
                          "Imagen seleccionada desde el carrete:",
                          uri
                        );
                      }
                    }}
                  />

                  {photo && (
                    <View>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: 16,
                          marginBottom: 10,
                          marginTop: 25,
                        }}
                      >
                        Vista previa de la foto:
                      </Text>
                      <PhotoPreview
                        styleCamerPreview={{
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: "#fff",
                          height: 250,
                          width: "100%",
                          overflow: "hidden",
                          backgroundColor: "#000",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        photoUri={photo}
                      ></PhotoPreview>
                    </View>
                  )}
                </View>
              )}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
