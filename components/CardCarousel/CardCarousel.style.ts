import { StyleSheet } from "react-native";

export const CardCarouselStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#54AD94",
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "uppercase",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  textDescription: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#024D76",
    textAlign: "center",
    letterSpacing: 1,
    borderBottomWidth: 2,
    paddingBottom: 10,
    flexWrap: "wrap",
  },
  imageStyle: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    resizeMode: "contain",
    borderColor: "#ccc",
  },
});
