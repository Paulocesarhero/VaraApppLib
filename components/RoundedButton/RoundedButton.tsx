import React from "react";
import {Pressable, Text, View} from "react-native";
import {RoundedButtonProps} from "./types";
import {RoundedButtonStyle} from "./RoundedButton.style";

/**
 * Un componente de botón redondeado personalizable para aplicaciones en React Native.
 *
 * @component
 * @param {RoundedButtonProps} props - Propiedades para configurar el RoundedButton.
 *
 *
 * @example
 * // Ejemplo de uso:
 * <RoundedButton
 *   color="#fff"
 *   text="Aceptar"
 *   style={{ margin: 10 }}
 *   onPress={() => console.log("Botón presionado")}
 * />
 */

const RoundedButton: React.FC<RoundedButtonProps> = ({
  color,
  text,
  style,
  ...restButtonProps
}: RoundedButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        style={[RoundedButtonStyle.container, { backgroundColor: color }]}
        {...restButtonProps}
      >
        <Text style={RoundedButtonStyle.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default RoundedButton;
