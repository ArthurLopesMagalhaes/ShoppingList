import { useEffect, useState } from "react";
import { FlatList, Text, View, Alert } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { HomeListItem, HomeListItemProps } from "./components/HomeListItem";

import { ChatTeardropText } from "phosphor-react-native";
import { NewListModal } from "../../components/NewListModal";

import { getRealm } from "../../database/realm";

export const Home = () => {
  const [newList, setNewList] = useState("");
  const [lists, setLists] = useState<HomeListItemProps[]>([]);
  const [modalVisibel, setModalVisible] = useState(false);

  const createNewList = async () => {
    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create("List", {
          _id: new Date().getTime(),
          name: newList,
          products: [],
        });
      });

      Alert.alert("Nova Lista", "Lista criada com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Nova Lista", "Não foi possível criar uma nova lista!");
    } finally {
      fetchLists();
    }
  };

  const fetchLists = async () => {
    const realm = await getRealm();

    try {
      const response = realm.objects<HomeListItemProps[]>("List").toJSON();

      setLists(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Buscar Listas", "Não foi possível buscar listas!");
    } finally {
      realm.close();
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <Background>
      <Header label="Minhas Listas" />
      {lists.length > 0 ? (
        <FlatList
          style={styles.scrollView}
          data={lists}
          keyExtractor={(item) => item._id.toString()}
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => <HomeListItem data={item} />}
        />
      ) : (
        <View style={styles.centeredView}>
          <ChatTeardropText size={96} color={theme.colors.heading} />
          <Text style={styles.emptyText}>
            Você ainda não criou {"\n"}
            nenhuma lista
          </Text>
        </View>
      )}

      <View style={styles.footer}>
        <Button text="Nova Lista" onPress={() => setModalVisible(true)} />
      </View>
      <NewListModal
        visible={modalVisibel}
        onClose={() => setModalVisible(false)}
        onInputText={setNewList}
        onConfirm={createNewList}
      />
    </Background>
  );
};
