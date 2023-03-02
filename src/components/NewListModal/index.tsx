import { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { Button } from "../Button";
import { styles } from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
  onInputText: (txt: string) => void;
  onConfirm: () => void;
};

const isAndroid = Platform.OS === "android";

export const NewListModal = ({
  visible,
  onClose,
  onInputText,
  onConfirm,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
              autoFocus
              onChangeText={(txt) => onInputText(txt)}
            />
            <Button text="Criar" onPress={onConfirm} />
          </TouchableOpacity>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};
