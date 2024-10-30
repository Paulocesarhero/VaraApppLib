import React from "react";
import MaterialInput from "./MaterialInput";
import { MaterialInputProps } from "./types";
import { action } from "@storybook/addon-actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import RoundedButton from "../RoundedButton/RoundedButton";

export default {
  title: "Components/MaterialInput",
  component: MaterialInput,
  parameters: {
    docs: {
      description: {
        component:
          "MaterialInput es un campo de entrada personalizable con soporte para validación y etiquetas.",
      },
    },
  },
};

export const Basic = () => {
  interface FormValues {
    input: string;
  }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      input: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Alert.alert("Datos", `Datos: ${data.input}`);
  };
  return (
    <View>
      <MaterialInput
        label={"Nombre"}
        control={control}
        nameInput={"input"}
        isRequired={false}
      />
      <RoundedButton
        color={"#000"}
        text={"Validar"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export const IsRequiered = () => {
  interface FormValues {
    input: string;
  }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      input: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Alert.alert("Datos", `Datos: ${data.input}`);
  };
  return (
    <View>
      <MaterialInput
        placeholder={"Este es el placeholder"}
        label={"Nombre"}
        control={control}
        nameInput={"input"}
        isRequired={true}
      />
      <RoundedButton
        color={"#000"}
        text={"Validar"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export const ValidateCustom = () => {
  interface FormValues {
    input: string;
  }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      input: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Alert.alert("Datos", `Datos: ${data.input}`);
  };
  return (
    <View>
      <MaterialInput
        placeholder={"Este es el placeholder"}
        label={"Nombre"}
        control={control}
        nameInput={"input"}
        isRequired={true}
        validateRules={{
          minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
          maxLength: { value: 20, message: "No puede exceder 20 caracteres" },
        }}
      />
      <RoundedButton
        color={"#000"}
        text={"Validar"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export const Interactive = (
  args: React.JSX.IntrinsicAttributes & MaterialInputProps,
) => <MaterialInput {...args} />;
Interactive.args = {
  placeholder: "Texto interactivo",
  label: "Label interactivo",
  isRequired: true,
  iconFamily: "Entypo",
  iconName: "map",
  onTextChange: action("onTextChange"), // Simula el cambio de texto y lo registra en Storybook
};
