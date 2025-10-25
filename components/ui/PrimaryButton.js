import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ onPress, children }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
        android_ripple={{
          color: "#ff0080",
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
    minWidth: 120,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#a10051",
    // Box shadow android
    elevation: 4,
    // Box shadow iOS
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
