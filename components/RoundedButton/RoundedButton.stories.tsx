import RoundedButton from "./RoundedButton";
import { action } from "@storybook/addon-actions";
import { RoundedButtonProps } from "./types";

export default {
  title: "Components/RoundedButton",
  component: RoundedButton,
};

export const Default = () => {
  return (
    <RoundedButton
      text={"Hola"}
      color={"#e17575"}
      onPress={() => console.log("Hola")}
    />
  );
};

export const Loading = () => {
  return (
    <RoundedButton
      color={"#d24d4d"}
      text={"Esta cargando"}
      loading={true}
      onPress={() => console.log("Disabled")}
    />
  );
};

export const Disabled = () => {
  return (
    <RoundedButton
      color={"#d24d4d"}
      text={"Este esta deshabilitado"}
      onPress={() => console.log("Disabled")}
      disabled={true}
    />
  );
};

export const icon = () => {
  return (
    <RoundedButton
      color={"#bbb"}
      text={"Este tiene icono"}
      iconName={"map"}
      onPress={() => console.log("Icono")}
    />
  );
};

export const Interactive = (args: RoundedButtonProps) => (
  <RoundedButton {...args} />
);
Interactive.args = {
  text: "Texto interactivo",
  color: "#4CAF50",
  onPress: action("Button clicked"),
  disabled: false,
  loading: false,
  iconName: "map",
  boxShadow: true,
};
