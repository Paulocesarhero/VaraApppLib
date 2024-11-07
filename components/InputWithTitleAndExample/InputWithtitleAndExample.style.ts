import { StyleSheet } from "react-native";

export const inputWithtitleAndExampleStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#7f8c8d",
  },
  title: {
    flex: 1,
    alignSelf: "center",
  },
  example: {
    flex: 2,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
