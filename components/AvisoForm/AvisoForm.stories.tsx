import { AvisoForm } from "./AvisoForm";
import React from "react";
import { action } from "@storybook/addon-actions";
export default {
  title: "Components/AvisoForm",
  component: AvisoForm,
  parameters: {
    docs: {
      description: {
        component:
          "AvisoForm es un formulario que permite al usuario ingresar los datos de un aviso.",
      },
    },
  },
};

export const Basic = () => (
  <AvisoForm
    onSubmitData={action("onSubmitData")}
    loading={false}
    setLoading={action("setLoading")}
    showEspecie={false}
  />
);

export const Experto = () => (
  <AvisoForm
    onSubmitData={action("onSubmitData")}
    loading={false}
    setLoading={action("setLoading")}
    showEspecie={true}
  />
);
