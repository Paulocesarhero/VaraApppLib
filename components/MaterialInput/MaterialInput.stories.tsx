import React from "react";
import MaterialInput from "./MaterialInput";
import { MaterialInputProps } from "./types";
import {action} from "@storybook/addon-actions";

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

export const Basic = () => (
  <MaterialInput
    placeholder={"Este es el placeholder"}
    label={"Este es el label"}
    onTextChange={() => console.log("Hola")}
  />
);

export const OtroEjemplo = () => (
  <MaterialInput
    label={"Este es un ejemplo de un material input que no es requerido"}
    placeholder={"Este no es requerido"}
    isRequired={false}
    iconFamily={"Entypo"}
    iconName={"map"}
    onTextChange={(text: string) => console.log(text)}
  />
);

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
