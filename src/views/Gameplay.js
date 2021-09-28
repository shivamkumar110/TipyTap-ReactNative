import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Tile } from "../components/Tile";
import { Timer } from "../components/Timer";
import { GameOver } from "../components/Gameover";
import { Score } from "../components/Score";

const MAX_TILES = 9;

export const GamePlay = ({ navigation, handleStart }) => {
  const [sound, setSound] = useState(null);
  const [isSoundPlaying, setSoundPlay] = useState(false);
  async function playBackgroundMusic() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/bg-music.mp3")
    );
    setSound(sound);
    await sound.playAsync();
    sound.setVolumeAsync(0.6);
  }

  useEffect(() => {
    // if(!isSoundPlaying) {
    //   playBackgroundMusic()
    //   setSoundPlay(true)
    // }
    playBackgroundMusic();
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [isSoundPlaying]);

  const [score, setScore] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = score;
  });
  const prevCount = prevCountRef.current;

  const [currentHighlightedIndex, setHighlightedIndex] = useState(0);
  const getTiles = () => {
    const tiles = [];
    for (let index = 0; index < MAX_TILES; index++) {
      tiles.push(
        <Tile
          highlightedIndex={currentHighlightedIndex}
          tileIndex={index}
          handleTap={handleTap}
        />
      );
    }
    return tiles;
  };

  const playSuccessAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/success-tap.wav")
    );
    await sound.playAsync();
  };

  const playFailAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/fail-tap.wav")
    );
    await sound.playAsync();
  };
  const handleTap = (tappedIndex) => {
    if (tappedIndex === currentHighlightedIndex) {
      setScore(prevCount + 1);
      playSuccessAudio();
      return;
    }
    setScore(prevCount - 1);
    playFailAudio();
  };
  const generateRandomIndex = () => {
    setHighlightedIndex(Math.floor(Math.random() * MAX_TILES - 1));
  };

  const [showGameoverPopup, setGameoverPopup] = useState(false);
  const handleTimeOver = async () => {
    setGameoverPopup(true);
    setHighScore();
  };
  const setHighScore = async () => {
    try {
      const currentHighscore = await AsyncStorage.getItem("TIPY_TAP_SCORE");
      if (currentHighscore !== null && score > parseInt(currentHighscore, 10)) {
        await AsyncStorage.setItem("TIPY_TAP_SCORE", score.toString());
      }
    } catch (e) {
      
    }
  };

  const handleModalClose = () => {
    handleStart(false)
    setGameoverPopup(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.gameplayHeader}>
        <Score score={score} />
        <Timer
          timeChangeCallback={generateRandomIndex}
          handleTimeOver={handleTimeOver}
        />
      </View>
      
      <View style={styles.tilesContainer}>
        { getTiles() }  
      </View>

      {showGameoverPopup && (
        <GameOver handleModalClose={handleModalClose} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1FAEE',
    height: '100%',
    flex: 1
  },
  gameplayHeader: {
    marginBottom: 40,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  tilesContainer: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
