import { Modal, StyleSheet, Text, View, Animated } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useRef, useState } from "react";

const InvalidNumberModal = ({ isShowModal, onHideModal, children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isShowModal) {
      setModalVisible(true);
      scaleAnim.setValue(0);
      opacityAnim.setValue(0);
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          speed: 14,
          bounciness: 4,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [isShowModal]);

  return (
    <Modal visible={modalVisible} transparent={true} animationType="none">
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={styles.text}>{children}</Text>
          <PrimaryButton onPress={onHideModal}>Okay</PrimaryButton>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default InvalidNumberModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#a10051",
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#2d0720",
  },
});
