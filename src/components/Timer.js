import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const TILE_REFRESH_RATE_IN_MS = 500;
const DEFAULT_GAME_TIME_IN_SECONDS = 10;

export const Timer = ({timeChangeCallback, handleTimeOver}) => {
  const interval = useRef(null);

  let [timeRemaining, setTime] = useState(DEFAULT_GAME_TIME_IN_SECONDS*1000);
  useEffect(() => {
   interval.current = setInterval(countdown, TILE_REFRESH_RATE_IN_MS);
   return () => clearInterval(interval.current)
  },[timeRemaining])
 
  const handleTimeChange = (time) => {
    if(time>0) {
      timeChangeCallback();
      return time - 1000
    }
    handleTimeOver()
    return 0;
    
  }

  const countdown = () => {
    setTime(handleTimeChange)
  }

  const getFormattedTime = () => {
    const minutes = Math.floor(timeRemaining /1000/60) % 60;
    const seconds = Math.floor(timeRemaining /1000) % 60;
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')} ` 
  }
  return (
    <View style={styles.container}>
        <Icon color="#f1faee" name="timer" size={40} type="material" />
        <Text style={styles.text}>{getFormattedTime()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1D3557',
    paddingLeft:20,
    paddingTop:0,
    paddingRight:20,
    flexDirection: 'row'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    paddingLeft: 10
  }
});