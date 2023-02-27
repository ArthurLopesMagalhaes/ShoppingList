import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string;
  onPress: () => void;
};

export const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
