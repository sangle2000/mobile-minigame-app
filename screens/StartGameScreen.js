import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import InvalidNumberModal from "../components/ui/InvalidNumberModal";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleChangeInput = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      setIsShowModal(true);
    }

    onPickedNumber(enteredNumber);
  };

  const handleHideMOdal = () => {
    setEnteredNumber("");
    setIsShowModal(false);
  };

  const handleResetInputNumber = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChangeInput}
        value={enteredNumber}
      />
      <View style={styles.buttonGroup}>
        <PrimaryButton onPress={handleResetInputNumber}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
      </View>

      <View style={styles.modalContainer}>
        <InvalidNumberModal
          isShowModal={isShowModal}
          onHideModal={handleHideMOdal}
        >
          Number has to be a number between 1 and 99
        </InvalidNumberModal>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3f001f",
    borderRadius: 8,
    // Box shadow for Android
    elevation: 4,
    // Box shadow for iOS
    shadowColor: "black",
    shadowOffset: {
      width: 0, // Bóng không bị đổ sang 2 bên
      height: 2, // Bóng đổ nhẹ xuống dưới
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
