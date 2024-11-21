import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { RoundedButtonProps } from "./types";
import { Ionicons } from "@expo/vector-icons";

/**
 * Un componente de botón redondeado personalizable para aplicaciones en React Native.
 * Soporta estados de carga y deshabilitado, y permite agregar un icono opcional.
 *
 * @component
 * @param {RoundedButtonProps} props - Propiedades para configurar el RoundedButton.
 *
 * @example
 * <RoundedButton
 *   color="#ff6347"
 *   text="Aceptar"
 *   loading={false}
 *   disabled={false}
 *   iconName="checkmark-circle"
 *   iconColor="#fff"
 *   textSize={18}
 *   borderRadius={25}
 *   onPress={() => console.log("Botón presionado")}
 * />
 */

const RoundedButton: React.FC<RoundedButtonProps> = ({
  colorBackground,
  colorText,
  text,
  style,
  loading = false,
  disabled = false,
  iconName,
  iconColor = "#fff",
  textSize = 16,
  borderRadius = 20,
  onPress,
  ...restButtonProps
}: RoundedButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: disabled ? "#ccc" : colorBackground,
            opacity: pressed ? 0.8 : 1,
            borderRadius: borderRadius,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={onPress}
        disabled={disabled || loading}
        {...restButtonProps}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            {iconName && (
              <Ionicons
                // @ts-ignore
                name={iconName}
                size={textSize}
                color={iconColor}
                style={{ marginRight: 8 }}
              />
            )}
            <Text style={{ fontSize: textSize, color: colorText }}>{text}</Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

export default RoundedButton;
