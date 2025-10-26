import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOVerScreen from "./screens/GameOverScreen";

export default function App() {
  const [userInputNumber, setUserInputNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePickedNumber = (pickedNumber) => {
    setUserInputNumber(pickedNumber);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickedNumber={handlePickedNumber} />;

  if (userInputNumber && !isGameOver) {
    screen = (
      <GameScreen userInput={userInputNumber} onGameOver={handleGameOver} />
    );
  }

  if (isGameOver) {
    screen = <GameOVerScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
