import React from "react";
import { action } from "@storybook/addon-actions";
import DateSelector from "./DateSelector";

export default {
  title: "Components/DateSelector",
  component: DateSelector,
  parameters: {
    docs: {
      description: {
        component:
          "DateSelector permite a los usuarios escoger una fecha. El valor por defecto es la fecha del dispositivo, se obtiene al cargar.",
      },
    },
  },
};

export const Basic = () => (
  <DateSelector
    label="Fecha de Avistamiento"
    onDateChange={action("Fecha Cambiada")}
  />
);
