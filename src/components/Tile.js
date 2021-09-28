import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = ({
  highlightedIndex = 0, 
  tileIndex= 0 
}) => StyleSheet.create({
  container: {
    backgroundColor: highlightedIndex === tileIndex? '#457B9D': '#A8DADC',
    marginTop: 10,
    height: 100,
    width: 100,
    borderRadius: 20,
  }
})

export const Tile = (props) => {

  return (
    <TouchableOpacity 
      style={[styles(props).container]} 
      onPress={() => props.handleTap(props.tileIndex)}
    />
  )
}
