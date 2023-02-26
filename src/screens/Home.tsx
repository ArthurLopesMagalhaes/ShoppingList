import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";

import { Header } from "../components/Header";
import { Button } from "../components/Button";

import { ChatTeardropText } from "phosphor-react-native";
import { theme } from "../global/styles/theme";
export const Home = () => {
  const [lists, setLists] = useState([]);

  return (
    <>
      <LinearGradient colors={["#050A30", "#000C66"]} style={styles.container}>
        <Header />
        {lists.length > 0 ? (
          <ScrollView style={styles.scrollView}></ScrollView>
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
      </LinearGradient>
    </>
  );
};
