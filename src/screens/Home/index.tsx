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

export const Home = () => {
  const [lists, setLists] = useState<HomeListItemProps[]>(homeListMock);

  return (
    <Background>
      <Header label="Minhas Listas"/>
      {lists.length > 0 ? (
        <FlatList
          style={styles.scrollView}
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HomeListItem data={item} />}
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
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
        <Button />
      </View>
    </Background>
  );
};
