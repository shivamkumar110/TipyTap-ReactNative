import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

export const GameOver = ({
  modalVisible,
  handleModalClose
}) => {
  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Game Over !</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleModalClose}
          >
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});