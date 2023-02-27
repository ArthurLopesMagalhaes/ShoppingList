import { ReactChild } from "react";
import LinearGradient from "react-native-linear-gradient";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Background = ({ children }: Props) => {
  const { primary100, primary90 } = theme.colors;

  return (
    <LinearGradient colors={[primary100, primary90]} style={styles.container}>
      {children}
    </LinearGradient>
  );
};
