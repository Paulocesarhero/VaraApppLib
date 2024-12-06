import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { DateSelectorProps } from "./types";
import { styles } from "./DateSelector.style";

const DateSelector: React.FC<DateSelectorProps> = ({
  label = "Select Date",
  onDateChange,
  value,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false); // Oculta el selector de fecha
    if (selectedDate) {
      onDateChange && onDateChange(selectedDate);
    }
  };

  // Almacena la fecha formateada de tipo: YYYY-MM-DD
  const formattedDate = value.toISOString().split("T")[0];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="calendar" size={24} color="#000" />
        <Text style={styles.dateText}>{formattedDate}</Text>
        <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
          <Ionicons name="chevron-down" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {showPicker && (
        <View style={{ backgroundColor: "#fff", borderRadius: 10 }}>
          <DateTimePicker
            value={value || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={handleDateChange}
            themeVariant="light" // Se fuerza el tema claro
          />
        </View>
      )}
    </View>
  );
};

export default DateSelector;
