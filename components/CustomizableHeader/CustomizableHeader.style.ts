import { StyleSheet } from "react-native";

export const CustomizableHeaderStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "5%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#024D76",
  },
  centerComponent: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
