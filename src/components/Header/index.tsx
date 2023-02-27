import { View, Text } from "react-native";
import { styles } from "./styles";
import { ArrowArcLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  iconLeft?: JSX.Element;
  label?: string;
  iconRight?: JSX.Element;
  leftIconPress?: () => void;
};

export const Header = ({
  iconLeft,
  label,
  iconRight,
  leftIconPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leftIconPress}>{iconLeft}</TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity>{iconRight}</TouchableOpacity>
    </View>
  );
};
