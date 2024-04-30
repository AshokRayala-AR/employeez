import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function StyledNextButton({ btnName, disabled }) {
  return (
    <View style={[styles.buttonstyle, disabled && styles.disabledButton]}>
      <Pressable disabled={disabled} >
        <Text style={{ textAlign: "center", opacity: disabled ? 0.5 : 1 }}>{btnName}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonstyle: {
    borderRadius: 50,
    padding: 12,
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#EA4080",
    textAlign: "center",
    height:45
  },
  disabledButton: {
    opacity: 0.5,
  },
});
