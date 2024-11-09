import BottomMenu from "../BottomMenu/BottomMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecommendationsPageStyle } from "./RecommendationsPage.style";
import { View } from "react-native";
import React from "react";
import { Carousel } from "react-native-basic-carousel";
import CardCarousel from "../CardCarousel/CardCarousel";
import { COLORS } from "../../src/Constants/Colors";
/**
 * Componente `RecommendationsPage`.
 *
 * Esta página muestra recomendaciones a través de un carrusel de tarjetas
 * que incluyen consejos visuales para el usuario. Además, contiene un menú
 * inferior de navegación.
 *
 * @component
 * @returns {JSX.Element} Página de recomendaciones con un carrusel y un menú inferior.
 *
 * @example
 * ```tsx
 * <RecommendationsPage />
 * ```
 */

const RecommendationsPage: React.FC = () => {
  const items = [
    {
      id: 1,
      labelHeading: "Mantén la calma",
      labelDescription: "No te pongas nervioso",
      imagePath: require("./generalTip1.imageset/generalTip1.png"),
    },
    {
      id: 2,
      labelHeading: "Evita",
      labelDescription: "Trabajar solo",
      imagePath: require("./generalTip2.imageset/generalTip2.png"),
    },
    {
      id: 3,
      labelHeading: "Evita",
      labelDescription: "Entrar al agua con animales",
      imagePath: require("./generalTip3.imageset/generalTip3.png"),
    },
    {
      id: 4,
      labelHeading: "Está mal",
      labelDescription: "Arrastrar animales",
      imagePath: require("./generalTip4.imageset/generalTip4.png"),
    },
    {
      id: 5,
      labelHeading: "Mantén libre",
      labelDescription:
        "Evita obstrucciones en las vías respiratorias de los animales",
      imagePath: require("./generalTip5.imageset/generalTip5.png"),
    },
    {
      id: 6,
      labelHeading: "Prohibido",
      labelDescription: "Administrar medicamentos",
      imagePath: require("./generalTip6.imageset/generalTip6.png"),
    },
  ];
  return (
    <View style={RecommendationsPageStyle.containerBody}>
      <Carousel
        data={items}
        renderItem={({ item }) => (
          <CardCarousel
            imagePath={item.imagePath}
            labelDescription={item.labelDescription}
            labelHeading={item.labelHeading}
          />
        )}
        itemWidth={400}
        pagination={true}
        paginationPosition={"top"}
      />
    </View>
  );
};

export default RecommendationsPage;
