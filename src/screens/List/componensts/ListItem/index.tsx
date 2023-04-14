import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Check, Trash } from "phosphor-react-native";

type ListItemProps = {
  name: string;
  onDeletePress: () => void;
};

export const ListItem = ({ name, onDeletePress }: ListItemProps) => {
  const [checked, setChecked] = useState(true);

  const handlePressCheckbox = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <TouchableOpacity
          style={checked ? styles.checked : styles.unhecked}
          activeOpacity={0.5}
          onPress={handlePressCheckbox}
        >
          {checked && <Check color="#fff" size={24} weight="bold" />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.trashContainer} onPress={onDeletePress}>
        <Trash color="#fff" size={24} weight="bold" />
      </TouchableOpacity>
    </View>
  );
};
