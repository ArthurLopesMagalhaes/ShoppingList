import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export type HomeListItemProps = {
  _id: number;
  name: string;
  products: string[];
};

type Props = {
  data: HomeListItemProps;
};

export const HomeListItem = ({ data }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("List", { _id: data._id, name: data.name })
      }
    >
      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
};
