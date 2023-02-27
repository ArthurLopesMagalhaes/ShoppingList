import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { HomeListItem, HomeListItemProps } from "./components/HomeListItem";

import { ChatTeardropText } from "phosphor-react-native";
import { homeListMock } from "../../mocks/homeList.mock";
import { NewListModal } from "../../components/NewListModal";

export const Home = () => {
  const [lists, setLists] = useState<HomeListItemProps[]>(homeListMock);
  const [modalVisibel, setModalVisible] = useState(false);

  return (
    <Background>
      <Header label="Minhas Listas" />
      {lists.length > 0 ? (
        <FlatList
          style={styles.scrollView}
          data={lists}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => <HomeListItem data={item} />}
        />
      ) : (
        <View style={styles.centeredView}>
          <ChatTeardropText size={96} color={theme.colors.heading} />
          <Text style={styles.emptyText}>
            Você ainda não crou {"\n"}
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
      />
    </Background>
  );
};
