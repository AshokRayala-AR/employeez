import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Next({ btnName}) {
  return (
    <View style={[styles.buttonstyle]}>
      <Pressable >
        <Text style={{ textAlign: "center", fontSize: 18, alignItems: "center",  }}>{btnName}</Text>
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
