import React from "react";
import MaterialSelector from "./MaterialSelector";
import { Estado } from "./types";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/MaterialSelector",
  component: MaterialSelector,
  parameters: {
    docs: {
      description: {
        component:
          "MaterialSelector es un componente que presenta al usuario datos en forma de lista desplegable, permitiendo seleccionar un valor que puede ser distinto del texto mostrado.",
      },
    },
  },
};

// Datos de ejemplo
const estados: Estado[] = [
  { id: "1", label: "Activo", apiValue: "active" },
  { id: "2", label: "Inactivo", apiValue: "inactive" },
  { id: "3", label: "Pendiente", apiValue: "pending" },
];

export const Basic = () => (
  <MaterialSelector
    label="Estado"
    estados={estados}
    onEstadoChange={(estado) => console.log("Estado seleccionado:", estado)}
  />
);



export const WithoutOptions = () => (
  <MaterialSelector
    label="Estado"
    estados={[]}
    onEstadoChange={(estado) => console.log("Estado seleccionado:", estado)}
  />
);

export const PreSelectedOption = () => (
  <MaterialSelector
    label="Estado"
    estados={estados}
    onEstadoChange={(estado) => console.log("Estado seleccionado:", estado)}
  />
);

export const Interactive = (args: any) => <MaterialSelector {...args} />;
Interactive.args = {
  label: "Selecciona un estado",
  estados: estados,
  IsRequired: true,
  onEstadoChange: action("onEstadoChange"),
  iconName: "map",
  iconFamily: "Entypo",
};
