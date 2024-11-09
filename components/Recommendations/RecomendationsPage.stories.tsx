import RecommendationsPage from "./RecommendationsPage";
import React from "react";
import { View } from "react-native";

export default {
  title: "components/Recomendations",
  component: RecommendationsPage,
  parameters: {
    docs: {
      description: {
        component:
          "RecomendationsPage muestra las recomendaciones de qué hacer en caso de presenciar un varamiento",
      },
    },
  },
};

export const Basic = () => {
  return (
    <View style={{ flex: 1 }}>
      <RecommendationsPage />
    </View>
  );
};
