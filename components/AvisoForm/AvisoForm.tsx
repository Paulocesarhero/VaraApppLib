import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Location from "expo-location";
import * as Linking from "expo-linking";
import React, { useEffect, useRef } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView, StyleSheet,
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

export const AvisoForm: React.FC<AvisoFormProps> = ({
  onSubmitData,
  loading,
  onValuesChange,
  data,
  isDisabled = false,
  showEspecie = false,
  reactNodeButton,
  scroolViewStyles,
  buttonStyles,
  onValidityChange
}: AvisoFormProps) => {
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

  const { handleSubmit, control, setValue, getValues, watch, formState } =
    useForm<AvisoValues>({
      defaultValues: data,
      mode: "onTouched",
    });
  const watchedValues = watch();

  useEffect(() => {
    onValuesChange(watchedValues);
  }, [watchedValues]);

  useEffect(() => {
    (async () => {
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
          ],
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
                    "No se puede abrir la configuración en este dispositivo.",
                  );
                }
              },
            },
          ],
        );
        return;
      }

      if (getValues("Latitud") == "" && getValues("Longitud") == "") {
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        setValue("Latitud", latitude.toString());
        setValue("Longitud", longitude.toString());
      }
    })();
  }, [getValues, setValue]);

  const handleMarkerPositionChange = (longitude: number, latitude: number) => {
    setValue("Latitud", latitude.toString());
    setValue("Longitud", longitude.toString());
  };
  const handleMarkerPositionNoChange = (
    longitude: number,
    latitude: number,
  ) => {
    setValue("Latitud", getValues("Latitud"));
    setValue("Longitud", getValues("Longitud"));
  };

  const onSubmit: SubmitHandler<AvisoValues> = (data) => {
    onSubmitData(data);
  };

  const scrollViewRef = useRef<ScrollView>(null);
  const {  isValid } = formState;

  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(isValid);
    }
  }, [isValid, onValidityChange]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
          {React.isValidElement(reactNodeButton) ? (
            React.cloneElement(reactNodeButton, {
              onPress: handleSubmit(onSubmit),
            })
          ) : typeof reactNodeButton === "function" ? (
            React.createElement(reactNodeButton, {
              onPress: handleSubmit(onSubmit),
            })
          ) : (
            <RoundedButton
              onPress={handleSubmit(onSubmit)}
              color={"#000000"}
              text={"Enviar"}
              style={[buttonStyles, { marginVertical: 10, marginTop: 5 }]}
              loading={loading}
            />
          )}
          <ScrollView
            style={[{ paddingHorizontal: 10 }, scroolViewStyles]}
            ref={scrollViewRef}
            keyboardShouldPersistTaps="handled"
          >
            <InputField
              isDisabled={isDisabled}
              nameInput={"CantidadDeAnimales"}
              label="Cantidad"
              placeholder="Ejemplo: 1"
              keyboardType="numeric"
              control={control}
              validateRules={{
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Solo se permiten números enteros",
                },
                min: {
                  value: 1,
                  message: "La cantidad debe ser mayor a cero",
                },
              }}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^0-9]/g, "");
                setValue("CantidadDeAnimales", filteredText, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              isRequired={true}
            />
            {isDisabled ? (
              <InputField
                iconFamily={"Ionicons"}
                iconName={"calendar"}
                isDisabled={isDisabled}
                nameInput={"FechaDeAvistamiento"}
                label="Fecha de avistamiento"
                keyboardType="numeric"
                control={control}
              />
            ) : (
              <Controller
                control={control}
                name="FechaDeAvistamiento"
                render={({ field: { value, onChange } }) => (
                  <DateSelector
                    value={value ? new Date(value) : new Date()}
                    label="Fecha de Avistamiento"
                    onDateChange={(selectedDate: Date) => {
                      const year = selectedDate.getFullYear();
                      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
                      const day = String(selectedDate.getDate()).padStart(2, "0");
                      const formattedDate = `${year}-${month}-${day}`;
                      setValue("FechaDeAvistamiento", formattedDate, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                      onChange(formattedDate);
                    }}
                  />
                )}
              />
            )}
            {showEspecie && (
              <Controller
                control={control}
                name="TipoDeAnimal"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View pointerEvents={isDisabled ? "none" : "auto"}>
                    <MaterialSelector
                      value={value}
                      label={"Tipo de Animal"}
                      estados={especieList}
                      iconName={"fish"}
                      iconFamily={"Ionicons"}
                      onEstadoChange={(estado: string) => {
                        onChange(estado);
                      }}
                    />
                  </View>
                )}
              />
            )}

            <Controller
              control={control}
              name="Sustrato"
              render={({ field: { onChange, value } }) => (
                <View pointerEvents={isDisabled ? "none" : "auto"}>
                  <MaterialSelector
                    value={value}
                    label={"Sustrato"}
                    estados={sustratosList}
                    iconName={"earth"}
                    iconFamily={"Ionicons"}
                    onEstadoChange={(estado: string) => {
                      onChange(estado);
                    }}
                  />
                </View>
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
                  <View pointerEvents={isDisabled ? "none" : "auto"}>
                    <CustomCheckBox
                      label="¿Fácil Acceso?"
                      isChecked={value}
                      onToggle={() => onChange(!value)}
                    />
                  </View>
                )}
              />

              <View style={{ width: 16 }} />

              <Controller
                control={control}
                name="Acantilado"
                render={({ field: { value, onChange } }) => (
                  <View pointerEvents={isDisabled ? "none" : "auto"}>
                    <CustomCheckBox
                      label="¿Acantilado?"
                      isChecked={value}
                      onToggle={() => onChange(!value)}
                    />
                  </View>
                )}
              />
            </View>

            <Controller
              control={control}
              name="LugarDondeSeVio"
              render={({ field: { onChange, value } }) => (
                <View pointerEvents={isDisabled ? "none" : "auto"}>
                  <MaterialSelector
                    value={value}
                    label={"Lugar donde se vio el mamífero"}
                    estados={lugarDondeSeVioList}
                    iconName={"eye"}
                    iconFamily={"Entypo"}
                    onEstadoChange={(estado: string) => {
                      onChange(estado);
                    }}
                  />
                </View>
              )}
            />

            <InputField
              isDisabled={isDisabled}
              nameInput={"Observaciones"}
              iconName="text"
              iconFamily="Entypo"
              label="Observaciones"
              placeholder="Ejemplo: El animal tiene pigmentación roja"
              control={control}
              isRequired={false}
            />
            <Controller
              control={control}
              name="CondicionDeAnimal"
              render={({ field: { onChange, value } }) => (
                <View pointerEvents={isDisabled ? "none" : "auto"}>
                  <MaterialSelector
                    label={"Estado del animal"}
                    value={value}
                    estados={condicionesList}
                    iconName={"heart"}
                    iconFamily={"Entypo"}
                    onEstadoChange={(estado: string) => {
                      onChange(estado); // Actualiza el valor del estado en el formulario
                    }}
                  />
                </View>
              )}
            />

            <InputField
              nameInput={"InformacionDeLocalizacion"}
              isDisabled={isDisabled}
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
              isDisabled={isDisabled}
              iconFamily="Ionicons"
              label="Latitud"
              keyboardType={"numbers-and-punctuation"}
              control={control}
              isRequired={true}
              validateRules={{
                pattern: {
                  value: /^-?[0-9]*\.?[0-9]*$/,
                  message:
                    "Solo se permiten números, un guión al principio y un punto decimal",
                },
              }}
              onChangeText={(text) => {
                // Primero, verifica si el guión está solo al principio
                if (text.indexOf("-") > 0) {
                  // Si el guión no está al principio, lo eliminamos
                  text = text.replace(/-/g, "");
                }

                // Filtrar caracteres no numéricos y punto decimal
                const filteredText = text
                  .split("")
                  .filter((char) => {
                    // Permitir un guión solo al principio
                    if (char === "-" && text.indexOf(char) === 0) return true;
                    // Permitir números y un punto decimal
                    return /[0-9.]/.test(char);
                  })
                  .join("");

                // Asegurar solo un punto decimal
                const parts = filteredText.split(".");
                const cleanedText =
                  parts.length > 2
                    ? `${parts[0]}.${parts.slice(1).join("").replace(/\./g, "")}`
                    : filteredText;

                setValue("Latitud", cleanedText);
              }}
            />

            <InputField
              nameInput={"Longitud"}
              iconName="compass"
              iconFamily="Ionicons"
              label="Longitud"
              isDisabled={isDisabled}
              keyboardType={"numbers-and-punctuation"}
              control={control}
              isRequired={true}
              onChangeText={(text) => {
                // Primero, verifica si el guión está solo al principio
                if (text.indexOf("-") > 0) {
                  // Si el guión no está al principio, lo eliminamos
                  text = text.replace(/-/g, "");
                }

                // Filtrar caracteres no numéricos y punto decimal
                const filteredText = text
                  .split("")
                  .filter((char) => {
                    // Permitir un guión solo al principio
                    if (char === "-" && text.indexOf(char) === 0) return true;
                    // Permitir números y un punto decimal
                    return /[0-9.]/.test(char);
                  })
                  .join("");

                // Asegurar solo un punto decimal
                const parts = filteredText.split(".");
                const cleanedText =
                  parts.length > 2
                    ? `${parts[0]}.${parts.slice(1).join("").replace(/\./g, "")}`
                    : filteredText;

                setValue("Longitud", cleanedText);
              }}
            />

            <View style={{ height: 350, marginBottom: 5, marginTop: 15 }}>
              <Text style={AvisoFormStyle.mapTitle}>
                Ubicación del avistamiento
              </Text>
              {isDisabled ? (
                <Map
                  markerLatitude={+getValues("Latitud")}
                  markerLongitude={+getValues("Longitud")}
                  onMarkerPositionChange={handleMarkerPositionNoChange}
                />
              ) : (
                <View style={AvisoFormStyle.mapContainer}>
                  <Map
                    markerLatitude={+getValues("Latitud")}
                    markerLongitude={+getValues("Longitud")}
                    onMarkerPositionChange={handleMarkerPositionChange}
                  />
                </View>
              )}
            </View>
            {isDisabled ? (
              <View>
                <Text
                  style={{
                    textAlign: "center",
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
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: "#fff",
                    height: 250,
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: "#000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  photoUri={getValues("Fotografia")}
                ></PhotoPreview>
              </View>
            ) : (
              <Controller
                control={control}
                name="Fotografia"
                render={({ field: { onChange, value } }) => (
                  <View style={{ marginBottom: "50%" }}>
                    <View>
                      <Text
                        style={{
                          textAlign: "center",
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
                        }}
                      />
                    </View>

                    <PhotoPicker
                      label="Selecciona una foto"
                      icon={<Entypo name="images" size={24} color="black" />}
                      onPhotoSelect={(uri: string | null) => {
                        onChange(uri);
                      }}
                    />

                    {value != null && (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
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
                          photoUri={value}
                        ></PhotoPreview>
                      </View>
                    )}
                  </View>
                )}
              />
            )}
          </ScrollView>
          </>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
