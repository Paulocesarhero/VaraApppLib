import MaterialPassword from "./MaterialPassword";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import RoundedButton from "../RoundedButton/RoundedButton";
import { Alert, View } from "react-native";

export default {
  title: "Components/MaterialPassword",
  component: MaterialPassword,
  parameters: {
    docs: {
      description: {
        component:
          "Este componente permite la entrada de una contraseña, mostrando y ocultando el texto. " +
          "Valida los requisitos de la contraseña, como longitud, inclusión de letras mayúsculas, " +
          "números y caracteres especiales. Además, muestra mensajes de error si la validación falla.",
      },
    },
  },
};

export const Basic = () => {
  interface FormValues {
    Contraseña: string;
  }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      Contraseña: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Alert.alert("Contraseña válida", `Contraseña: ${data.Contraseña}`);
  };
  return (
    <View>
      <MaterialPassword
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        name="Contraseña"
        control={control}
        isRequired={true}
        maxLength={50}
      />
      <RoundedButton
        onPress={handleSubmit(onSubmit)}
        color={"#000"}
        text={"Enviar"}
      />
    </View>
  );
};
