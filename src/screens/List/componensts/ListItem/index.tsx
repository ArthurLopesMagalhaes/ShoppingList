import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { CheckCircle, Checks, Check } from "phosphor-react-native";

export const ListItem = () => {
  const [checked, setChecked] = useState(true);

  const handlePressCheckbox = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Melancia</Text>
      <TouchableOpacity
        style={checked ? styles.checked : styles.unhecked}
        activeOpacity={0.5}
        onPress={handlePressCheckbox}
      >
        {checked && <Check color="#fff" size={24} weight="bold" />}
      </TouchableOpacity>
    </View>
  );
};
