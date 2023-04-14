import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Plus } from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { getRealm } from "../../database/realm";
import { theme } from "../../global/styles/theme";
import { itemListMock } from "../../mocks/itemList.mock";
import { ListItem } from "./componensts/ListItem";
import { styles } from "./styles";

type RouteParams = ProductProps;

type ProductProps = {
  _id: number;
  name: string;
};

export const List = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<ProductProps[]>(itemListMock);

  const navigation = useNavigation();
  const route = useRoute();

  const { _id, name } = route.params as RouteParams;

  const addNewProduct = async () => {
    const realm = await getRealm();

    try {
      const list = realm.objects("List").filtered(`_id = ${_id}`)[0];
      console.log(list.products);

      realm.write(() => {
        list.products.push({
          _id: new Date().getTime(),
          name: newItem,
        });
      });
      fetchProducts();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível adicionar um novo produto");
    }
  };

  const fetchProducts = async () => {
    const realm = await getRealm();

    try {
      const response: ProductProps[] = realm
        .objects("List")
        .filtered(`_id = ${_id}`)[0]
        .products.toJSON();

      setItems(response);
    } catch (error) {
      Alert.alert("Buscar Listas", "Não foi possível buscar listas!");
    }
  };

  const deleteProduct = async (productId: number) => {
    const realm = await getRealm();

    try {
      const list = realm.objects("List").filtered(`_id = ${_id}`)[0];
      let listProducts: ProductProps[] = realm
        .objects("List")
        .filtered(`_id = ${_id}`)[0]
        .products.toJSON();

      const newProducts = listProducts.filter((item) => item._id !== productId);
      console.log(newProducts);

      realm.write(() => {
        list.products = newProducts;
      });
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Background>
      <Header
        label={name}
        iconLeft={<ArrowLeft color="white" size={28} />}
        leftIconPress={() => navigation.goBack()}
      />
      <FlatList
        style={styles.itemsContainer}
        data={items}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            onDeletePress={() => deleteProduct(item._id)}
          />
        )}
      />
      <View style={styles.footer}>
        <TextInput style={styles.input} onChangeText={setNewItem} />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={addNewProduct}
          disabled={newItem.length <= 2}
        >
          <Plus color={theme.colors.heading} size={32} weight="bold" />
        </TouchableOpacity>
      </View>
    </Background>
  );
};
