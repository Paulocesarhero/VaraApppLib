import React, { FC, useEffect, useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Estado, EstadoSelectorProps } from "./types";
import { MaterialSelectorStyle } from "./MaterialSelector.style";

/**
 * Componente de selección muestra al usuario unos valores y dentro de .
 *
 * @param {EstadoSelectorProps} props - Las propiedades del componente.
 * @param {string} props.label - La etiqueta que se muestra sobre el selector.
 * @param {function} props.onEstadoChange - Función de callback que se llama con el valor `apiValue` del estado seleccionado.
 */
const MaterialSelector: FC<EstadoSelectorProps> = ({
  label,
  estados,
  onEstadoChange,
  iconName = "map",
  iconFamily = "Entypo",
  value,
}: EstadoSelectorProps) => {
  const [selectedEstado, setSelectedEstado] = useState<string | null>(
    value || estados[0]?.label || null
  );

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleSelectEstado = (estado: Estado) => {
    onEstadoChange(estado.apiValue);
    setSelectedEstado(estado.label);
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (value) {
      const estadoEncontrado = estados.find(
        (estado) => estado.apiValue == value
      );
      if (estadoEncontrado) {
        setSelectedEstado(estadoEncontrado.label);
      }
    }
  }, [value, estados]);

  const renderIcon = () => {
    if (iconFamily === "Ionicons") {
      // @ts-ignore
      return <Ionicons name={iconName} size={24} color={"#000"} />;
    } else if (iconFamily === "Entypo") {
      // @ts-ignore
      return <Entypo name={iconName} size={24} color={"#000"} />;
    }
    return null;
  };

  return (
    <View style={MaterialSelectorStyle.container}>
      <Text style={MaterialSelectorStyle.label}>{label}</Text>
      <TouchableOpacity
        style={[
          MaterialSelectorStyle.selectorContainer,
          { borderColor: "#000" },
        ]}
        onPress={() => setIsModalVisible(true)}
      >
        {renderIcon()}
        <Text style={MaterialSelectorStyle.selectedText}>{selectedEstado}</Text>
        <Entypo name="chevron-down" size={24} color={"#000000"} />
      </TouchableOpacity>

      {!selectedEstado && (
        <Text style={MaterialSelectorStyle.helperText}>
          Por favor seleccione {label.toLowerCase()}
        </Text>
      )}

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={MaterialSelectorStyle.modalContainer}>
          <View style={MaterialSelectorStyle.modalContent}>
            <FlatList
              data={estados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={MaterialSelectorStyle.option}
                  onPress={() => handleSelectEstado(item)}
                >
                  <Text style={MaterialSelectorStyle.optionText}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={MaterialSelectorStyle.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Ionicons name="close-circle" size={30} color={"#000000"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MaterialSelector;
