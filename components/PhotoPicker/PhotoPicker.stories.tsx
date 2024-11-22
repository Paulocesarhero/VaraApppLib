import React from "react";
import { action } from "@storybook/addon-actions";
import PhotoPicker from "./PhotoPicker";
import { Entypo } from "@expo/vector-icons";

export default {
  title: "Components/PhotoPicker",
  component: PhotoPicker,
  parameters: {
    docs: {
      description: {
        component:
          "PhotoPicker es un componente que permite seleccionar una foto del carrete del dispositivo.",
      },
    },
  },
};

export const Basic = () => (
  <PhotoPicker
    label="Selecciona una foto"
    onPhotoSelect={(uri) => console.log("Foto seleccionada:", uri)}
  />
);
