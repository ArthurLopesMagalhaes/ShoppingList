import { View, Text } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Minhas Listas</Text>
    </View>
  );
};
