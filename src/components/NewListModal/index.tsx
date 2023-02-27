import { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const NewListModal = ({ visible, onClose }: Props) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity style={styles.modalBody} activeOpacity={1}>
          <TextInput
            style={styles.input}
            placeholder="Mercado, Farmácia, etc."
            numberOfLines={1}
          />
          <Button text="Criar" onPress={() => null} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
