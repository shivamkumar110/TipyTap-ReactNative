import React, {useState, useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Highscore = () => {
  const [highScore, setHighscore] = useState('0')
  useEffect(() => {
    getHighscore()
  })
  const getHighscore = async () => {
    try {
      const currentHighscore =  await AsyncStorage.getItem('TIPY_TAP_SCORE')
      if(!currentHighscore) {
        await AsyncStorage.setItem('TIPY_TAP_SCORE', highScore)
      }
      setHighscore(currentHighscore || '0')
    } catch(e) {
      // error reading value
    }
  }
  return (
    <View>
      <Badge
        textStyle={styles.highScore}
        badgeStyle={styles.badgeStyle}
        value={highScore}
      />
    </View>
  )
  
}

const styles = StyleSheet.create({
  badgeStyle: {
    padding: 10,
    height: 50,
    backgroundColor: '#f1faee'
  },
  highScore: {
    fontSize: 34,
    color: "#1d3557",
  },
})