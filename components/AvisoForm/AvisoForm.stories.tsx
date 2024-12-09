import { AvisoForm } from "./AvisoForm";
import React from "react";
import { action } from "@storybook/addon-actions";
import { Pressable, View } from "react-native";
import { useForm } from "react-hook-form";
import { AvisoValues } from "./types";

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

export const Basic = () => {
  const { handleSubmit } = useForm<AvisoValues>();

  return (
    <View style={{ flex: 1 }}>
      <AvisoForm
        onSubmitData={action("onSubmitData")}
        loading={false}
        setLoading={action("setLoading")}
        data={{
          Nombre: "Paulo",
          Telefono: "2282522839",
          Fotografia: "https://via.placeholder.com/300",
          FechaDeAvistamiento: new Date("2024-12-30T10:00:00"),
          Sustrato: 1,
          FacilAcceso: true,
          Acantilado: false,
          LugarDondeSeVio: 0,
          TipoDeAnimal: "Ave",
          Observaciones: "Se ve saludable",
          CondicionDeAnimal: 2,
          CantidadDeAnimales: "",
          InformacionDeLocalizacion: "Cerca de la entrada principal",
          Latitud: "19.432608",
          Longitud: "-99.133209",
        }}
        onValuesChange={action("onValuesChange")}
      />
    </View>
  );
};

export const Disabled = () => (
  <AvisoForm
    onSubmitData={action("onSubmitData")}
    loading={false}
    setLoading={action("setLoading")}
    isDisabled={true}
    data={{
      Nombre: "Paulo",
      Telefono: "2282522839",
      Fotografia: "https://via.placeholder.com/300",
      FechaDeAvistamiento: "2024-12-30T10:00:00",
      Sustrato: 1,
      FacilAcceso: true,
      Acantilado: false,
      LugarDondeSeVio: 0,
      TipoDeAnimal: "Ave",
      Observaciones: "Se ve saludable",
      CondicionDeAnimal: 2,
      CantidadDeAnimales: "",
      InformacionDeLocalizacion: "Cerca de la entrada principal",
      Latitud: "19.432608",
      Longitud: "-99.133209",
    }}
    onValuesChange={action("onValuesChange")}
  />
);
