import { ColorSchemeName, StyleSheet, useColorScheme } from "react-native";

const lighTheme = StyleSheet.create({
  text: {
    color: "black",
  },
  textPlaceholder: {
    color: "grey",
  },
  background: {
    backgroundColor: "#e5e5e5",
  },
  backgroundInput: {
    backgroundColor: "#f0f0f0",
  },
});

const darkTheme = StyleSheet.create({
  text: {
    color: "white",
  },
  textPlaceholder: {
    color: "#f0f0f0",
  },
  background: {
    backgroundColor: "black",
  },
  backgroundInput: {
    backgroundColor: "#f0f0f0",
  },
});

export default function useTheme() {
  const colorScheme: ColorSchemeName = useColorScheme();
  return colorScheme === "light" ? lighTheme : darkTheme;
}
