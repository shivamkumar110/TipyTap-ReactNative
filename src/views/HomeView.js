import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";

import { Highscore } from "../components/Highscore";

export const HomeView = ({ navigation, handleStart }) => {
  console.log(navigation);
  return (
    <View style={styles.container} >
      <View style={styles.playContainer}>
        <Button
          icon={
            <Icon color="#1d3557" name="play-arrow" size={40} type="material" />
          }
          buttonStyle={styles.buttonStyle}
          raised={true}
          titleStyle={styles.playButton}
          title="Start"
          onPress={() => handleStart(true)}
        />
      </View>
      <View style={styles.highScoreSection}>
        <Icon color="#f1faee" name="military-tech" size={60} type="material" />
        <View style={styles.highScoreContainer}>
          <Text style={styles.highScore}>
            Highscore:  
          </Text>
          <Highscore />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  playContainer: {
    flex: 0.5,
    padding: 10,
    justifyContent: "flex-end",
  },
  playButton: {
    fontSize: 44,
    padding: 10,
    color: "#1d3557",
  },
  buttonStyle: {
    backgroundColor: "#f1faee",
  },
  highScoreSection: {
    justifyContent: "flex-end",
    flex: 0.5
  },
  highScore: {
    fontSize: 36,
    color: '#f1faee',
    marginRight: 20
  },
  highScoreContainer:  {
    flexDirection: 'row'
  }
});
