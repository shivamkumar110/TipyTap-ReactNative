import React, { useState, useEffect, useRef }from "react";
import { StyleSheet, Text, View } from "react-native";

import { HomeView } from "./src/views/HomeView";
import { GamePlay } from "./src/views/Gameplay";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isStarted, startGame] = useState(false);
  const handleStart =  (bool) => {
    startGame(bool)
  }
  return (
    <View style={[styles(isStarted).container]}>
      {!isStarted ? 
       <HomeView handleStart= {handleStart}/> :
         <GamePlay handleStart={handleStart}/> }
     

      
    </View>
  );
}

const styles = (isStarted) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: isStarted ? "#F1FAEE" : '#E63946',
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    fontSize: 44,
    padding: 10,
  },
});
