import React from "react";
import { Image, Text, View } from "react-native";
import { CardCarouselProps } from "./types";
import { CardCarouselStyle } from "./CardCarousel.style";

const CardCarousel: React.FC<CardCarouselProps> = ({
  labelHeading,
  labelDescription,
  imagePath,
}) => {
  return (
    <View style={CardCarouselStyle.container}>
      <Text style={CardCarouselStyle.textHeading}>{labelHeading}</Text>
      <Image source={imagePath} style={CardCarouselStyle.imageStyle} />
      <Text style={CardCarouselStyle.textDescription}>{labelDescription}</Text>
    </View>
  );
};

export default CardCarousel;
