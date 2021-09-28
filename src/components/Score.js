import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export const Score = ({score}) => {
  return (
    <View style={styles.container}>
      <Icon color="#f1faee" name="local-atm" size={40} type="material" />
      <Text style={styles.text}>{score}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1D3557',
    padding:20,
    flexDirection: 'row'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    paddingLeft: 10
  }
})