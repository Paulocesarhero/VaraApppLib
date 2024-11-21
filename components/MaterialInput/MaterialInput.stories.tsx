import React from "react";
import MaterialInput from "./MaterialInput";
import { action } from "@storybook/addon-actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import RoundedButton from "../RoundedButton/RoundedButton";
import useTheme from "../hooks/useTheme";

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
  const theme = useTheme();
  return (
    <View style={[{ flex: 1 }, theme.background]}>
      <MaterialInput
        placeholder={"Este es el placeholder"}
        label={"Nombre"}
        control={control}
        nameInput={"input"}
        isRequired={true}
      />
      <RoundedButton
        colorBackground={theme.text.color}
        colorText={theme.background.backgroundColor}
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
  const theme = useTheme();
  return (
    <View style={[{ flex: 1 }, theme.background]}>
      <MaterialInput
        placeholder={"Este es el placeholder"}
        label={"Nombre"}
        control={control}
        nameInput={"input"}
        isRequired={true}
      />
      <RoundedButton
        colorBackground={theme.text.color}
        colorText={theme.background.backgroundColor}
        text={"Validar"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export const Interactive = (args: any) => {
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
  const theme = useTheme();
  return (
    <View style={[{ flex: 1 }, theme.background]}>
      <MaterialInput
        label={args.label}
        nameInput={"input"}
        control={control}
        {...args}
      />
      <RoundedButton
        colorBackground={theme.text.color}
        colorText={theme.background.backgroundColor}
        onPress={handleSubmit(onSubmit)}
        text="submit"
      />
    </View>
  );
};
Interactive.args = {
  placeholder: "Texto interactivo",
  label: "Label interactivo",
  iconFamily: "Entypo",
  iconName: "map",
  onTextChange: action("onTextChange"),
  isRequired: false,
};
