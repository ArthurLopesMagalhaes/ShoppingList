import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Check, Plus } from "phosphor-react-native";
import { useState } from "react";
import { TextInput, View, TouchableOpacity, FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { itemListMock } from "../../mocks/itemList.mock";
import { ListItem } from "./componensts/ListItem";
import { styles } from "./styles";

export const List = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([0, 2, 4, 6, 4, 2, 1, 85]);

  return (
    <Background>
      <Header
        label="Mercado"
        iconLeft={<ArrowLeft color="white" size={28} />}
        leftIconPress={() => navigation.goBack()}
      />
      <FlatList
        style={styles.itemsContainer}
        data={itemListMock}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={() => <ListItem />}
      />
      <View style={styles.footer}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.btnContainer}>
          <Plus color={theme.colors.heading} size={32} weight="bold"/>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
