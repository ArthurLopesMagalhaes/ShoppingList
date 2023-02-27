import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { Text } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

export const List = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Header
        label="Mercado"
        iconLeft={<ArrowLeft color="white" size={28} />}
        leftIconPress={() => navigation.goBack()}
      />
    </Background>
  );
};
