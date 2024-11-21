import { AvisoForm } from "../AvisoForm/AvisoForm";
import CustomCheckBox from "./CustomCheckBox";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";

export default {
  title: "Components/CustomCheckBox",
  component: CustomCheckBox,
  parameters: {
    docs: {
      description: {
        component:
          "CustomCheckBox es una casilla tipo checkBox que permite al usuario clickear sobre una opción para hacer check.",
      },
    },
  },
};

export const Basic = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    action("onToggle")(!isChecked);
  };

  return (
    <CustomCheckBox
      label="Acepta los términos y condiciones"
      isChecked={isChecked}
      onToggle={handleToggle}
    />
  );
};
